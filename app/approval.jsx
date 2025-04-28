// app/approval.jsx
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import styles from '@/app/styles/approval';
import logo_img from '@/assets/images/logo_approval.png';
import { auth, db } from '@/app/styles/firebaseConfig'; // Import services from config
import { doc, getDoc, onSnapshot } from 'firebase/firestore'; //  Import Firestore functions directly

const Approval = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const user = auth.currentUser;
      
      if (!user) {
        console.error('No user is currently logged in.');
        setError('Authentication required');
        setIsLoading(false);
        // Redirect to login after a short delay
        const timer = setTimeout(() => router.push('/'), 2000);
        return () => clearTimeout(timer);
      }

      // Set up a real-time listener for verification status
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, 
        (docSnapshot) => {
          setIsLoading(false);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setIsVerified(data.isVerified || false);
          } else {
            console.error('User document does not exist.');
            setError('User profile not found');
          }
        },
        (error) => {
          console.error('Error fetching verification status:', error);
          setError('Failed to check verification status');
          setIsLoading(false);
        }
      );

      return unsubscribe; // Clean up listener on unmount
    };

    const unsubscribe = checkAuth();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isVerified) {
      router.push('/home');
    }
  }, [isVerified]);

  // Handle logout
  const handleLogout = () => {
    auth.signOut()
      .then(() => router.push('/'))
      .catch(error => console.error('Logout error:', error));
  };

  if (isLoading) {
    return (
      <View style={[styles.otp_container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 20 }}>Checking verification status...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.otp_container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red', marginBottom: 20 }}>{error}</Text>
        <TouchableOpacity 
          style={{ backgroundColor: '#4285F4', padding: 10, borderRadius: 5 }}
          onPress={() => router.push('/')}
        >
          <Text style={{ color: 'white' }}>Return to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.otp_container}>
      <View style={styles.text_container}>
        <Image style={styles.img} source={logo_img} />
        <Text style={styles.subtext}>Verification Pending</Text>
        <Text style={styles.verify_msg}>
          Please wait for the admin to approve your account. {'\n'}
          We will notify you once approved.
        </Text>
        <Text style={styles.reminder}>We'll notify you once approved.</Text>
        
        {/* Add logout button */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#f44336', 
            padding: 15, 
            borderRadius: 10,
            marginTop: 30,
            alignSelf: 'center',
            width: '80%',
          }}
          onPress={handleLogout}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Approval;