import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import logo_img from '@/assets/images/logo.png';
import google_logo from '@/assets/images/google.png'
import facebook_logo from '@/assets/images/facebook_logo.png'
import apple_logo from '@/assets/images/appl_logo.png' 
import { Link, router, useRouter } from 'expo-router';
import styles from '@/app/styles/index' // link para sa css
import { auth, signInWithEmailAndPassword } from '@/app/styles/firebaseConfig';



const loginUser = async (email, password) => {
  try {
    console.log("Attempting login with:");
    console.log("Email:", email);
    console.log("Password:", password);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful:", userCredential.user);
    alert("Logged in successfully!");
    router.push("/Otp_panel")
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + error.message);
  }
};


const app = () => {
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

      <Link href={"/Otp_panel"} style={styles.Link}>Forgot password?</Link>
      

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

