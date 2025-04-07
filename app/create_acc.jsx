import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import styles from '@/app/styles/create_acc';
import google_logo from '@/assets/images/google.png';
import facebook_logo from '@/assets/images/facebook_logo.png';
import account from '@/app/styles/appwriteConfig'; // Import Appwrite account instance
import { ID } from 'appwrite'; // Import ID for unique user ID generation

const createUser = async (email, password, name, setEmail, setPassword, setNumber, isChecked) => {
  if (!isChecked) {
    alert('Please agree to the Terms of Service and Privacy Policy.');
    return;
  }

  if (!email || !password || !name) {
    alert('Please fill in all required fields.');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }

  try {
    // Create a new user with a unique ID, email, password, and name
    const response = await account.create(
      ID.unique(), // Generates a unique ID for the user
      email,
      password,
      name // Optional: Full name
    );
    console.log('Account created successfully:', response);
    alert('Account created successfully! Please log in.');

    // Clear the form after success
    setEmail('');
    setPassword('');
    setNumber('');
  } catch (error) {
    console.error('Account creation failed:', error);
    alert('Account creation failed: ' + error.message);
  }
};

const CreateAcc = () => {
  const [email, setEmail] = useState(''); // Using "email" as full name for simplicity; adjust if needed
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.txt_container}>
        <Text style={styles.Text}>Create Account</Text>
        <Text style={styles.subText}>Sumali para dumami ang pera!</Text>
      </View>

      {/* Social Media Login */}
      <View style={styles.logo_container}>
        <TouchableOpacity style={styles.social_btn}>
          <Image source={google_logo} style={styles.logo} />
          <Text>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_btn}>
          <Image source={facebook_logo} style={styles.logo} />
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Separator */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.msg}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Form Inputs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.fillup_box}>
            <View style={styles.full_box_name}>
              <Text style={styles.box_name}>Full Name</Text>
              <TextInput
                style={styles.input_email}
                placeholder="Enter your full name"
                value={email} // Using "email" for full name; rename if needed
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.full_box_name}>
              <Text style={styles.box_name}>Number</Text>
              <TextInput
                style={styles.input_number}
                placeholder="Enter your number"
                value={number}
                onChangeText={setNumber}
                keyboardType="phone-pad" // Optional: Better for phone numbers
              />
            </View>

            <View style={styles.full_box_name}>
              <Text style={styles.box_name}>Password</Text>
              <TextInput
                style={styles.input_password}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <Text style={styles.pass_res}>Must be at least 8 characters</Text>
            </View>
          </View>

          {/* Checkbox */}
          <View style={styles.checkbox_container}>
            <Pressable
              style={[styles.checkbox, isChecked && styles.checked]}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text style={styles.check_mess}>
              I agree to the Terms of Service and Privacy{'\n'}Policy
            </Text>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.login_btn}
            onPress={() => createUser(email, password, email, setEmail, setPassword, setNumber, isChecked)} // Using "email" as name
          >
            <Text style={styles.login_text}>Sign Up</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer_signin}>
            <Text style={styles.signup}>
              Already have an account?{' '}
              <Link href="/" style={styles.sign_link}>
                Sign In
              </Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAcc;