import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, router, useRouter } from 'expo-router';
import styles from '@/app/styles/create_acc';
import google_logo from '@/assets/images/google.png';
import { auth } from '@/app/styles/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/styles/firebaseConfig';
import { getDoc, doc, setDoc} from 'firebase/firestore';



const createUser = async (name, email, number, password, setEmail, setPassword, setNumber, setName, isChecked) => {
  if (!isChecked) {
    alert("Please agree to the Terms of Service and Privacy Policy.");
    return;
  }

  if (!name || !email || !number || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // ✅ FIX: define user

    console.log("Account created successfully:", user);
    alert("Account created successfully! Please log in.");

    const userRef = doc(db, "users", user.uid); // ✅ Now user is defined
      await setDoc(userRef, {
        uid: user.uid,
        name,
        email,
        number,
        isVerified: false
      });

      // Now setting the balance reference
      const balanceRef = doc(db, `balances`, user.uid);
      await setDoc(balanceRef, {
        current_balance: 0,
      });

      // Set for the payment history
      const paymentHistoryRef = collection(db, `payment_history/${user.uid}/transactions`)
      await addDoc(paymentHistoryRef, {
        amount: 0,
        date: new Date().toISOString(),
        description: 'new acc created',
      });

    // Clear input fields
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");

    router.push("/approval");

  } catch (error) {
    console.error("Account creation failed:", error);
    alert("Account creation failed: " + error.message);
  }
};

const CreateAcc = () => {
  const rounter = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
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
                  style={styles.input_name}
                  placeholder="Enter your full name"
                  value={name} // Using "email" for full name; rename if needed
                  onChangeText={setName}
                />
              </View>

              <View style={styles.full_box_name}>
                <Text style={styles.box_name}>Email Address</Text>
                <TextInput
                  style={styles.input_email}
                  placeholder="Enter your email"
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
              onPress={() => createUser(name, email, number, password, setEmail, setPassword, setNumber,setName, isChecked)}
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