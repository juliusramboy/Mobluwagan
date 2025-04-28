import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import logo_img from '@/assets/images/logo.png';
import google_logo from '@/assets/images/google.png'
import facebook_logo from '@/assets/images/facebook_logo.png'
import apple_logo from '@/assets/images/appl_logo.png' 
import { Link, router, useRouter } from 'expo-router';
import styles from '@/app/styles/index' // link para sa css
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '@/app/styles/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


const loginUser = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Login successful:", user.email);

    // 🔍 Get user document from Firestore
    const userDocRef = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      
      if (userData.isVerified) {
        router.push("/dashboard"); // ✅ Verified users
      } else {
        alert("You're not verified yet.");
        router.push("/approval"); // ❌ Not verified users
      }
    } else {
      alert("User document not found in database.");
    }

  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + error.message);
  }
};


const app = ({ navigation }) => {
  const rounter = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo_img} />
      <Text style={styles.text}>Ipayaman</Text>
      <Text style={styles.subtext}>Rotating Savings and Credit Association</Text>

      {/* Textbox inputs */}
      <TextInput 
        style={styles.input_email}
        placeholder="Email or username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input_password}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Link href={"/approval"} style={styles.Link}>Forgot password?</Link>
      

      {/* login Button */}
      <TouchableOpacity style={styles.login_btn} onPress={() => loginUser(email, password)}><Text style={styles.login_text}>Log In</Text></TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.msg}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      {/* socmid logins */}

      {/* <TouchableOpacity style={styles.google_btn} onPress={onPress}>
        <Image source={google_logo}></Image>
      <Text style={styles.login_text}>Log In</Text>
      </TouchableOpacity> */}
      <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.social_btn} >
        <Image source={google_logo} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.social_btn} >
        <Image source={facebook_logo} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.social_btn} >
        <Image source={apple_logo} style={styles.logo} />
      </TouchableOpacity>
    </View>

      
        <Text style={styles.signup}>Don't have an account?  
        <Link href={"/create_acc"} style={styles.sign_link}> Sign Up</Link> </Text>
      
    </View>

    
  );
};



export default app;
