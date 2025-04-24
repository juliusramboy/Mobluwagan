import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import styles from '@/app/styles/approval';
import logo_img from '@/assets/images/logo_approval.png';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/app/styles/firebaseConfig'; // Importing from your config

const Approval = () => {
  const [isVerified, setIsVerified] = useState(false); // State for verification status
  const router = useRouter(); // Router for navigation

  useEffect(() => {
    const fetchVerificationStatus = async () => {
      const user = auth.currentUser; // Get the current user
      
      if (!user) {
        console.error('No user is currently logged in.');
        return; // Exit if no user is logged in
      }

      try {
        const userDocRef = doc(db, 'users', user.uid); // Reference to the user's document
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsVerified(data.isVerified || false); // Update state based on Firestore data
        } else {
          console.error('User document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching verification status:', error);
      }
    };

    fetchVerificationStatus();
  }, []);

  useEffect(() => {
    if (isVerified) {
      router.push('/home'); // Redirect to the home screen if verified
    }
  }, [isVerified]);

  // Render the approval panel only if isVerified is false
  if (isVerified) {
    return null; // Don't render the panel
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
        <Text style={styles.reminder}>We'll notify you once approved</Text>
      </View>
    </View>
  );
};

export default Approval;
