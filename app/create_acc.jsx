import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import React, { useState} from 'react';
import { Link } from 'expo-router';
import styles from '@/app/styles/create_acc'
import google_logo from '@/assets/images/google.png'
import facebook_logo from '@/assets/images/facebook_logo.png'

const create_acc = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style = {styles.container}>
      <View style = {styles.txt_container}>
        <Text style ={styles.Text}>Create Account</Text>
        <Text style ={styles.subText}>Sumali para dumami ang pera!</Text>
      </View>

      {/* socmed login */}
      <View style= {styles.logo_container}>
          <TouchableOpacity style={styles.social_btn} >
            <Image source={google_logo} style={styles.logo} />
            <Text>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.social_btn} >
            <Image source={facebook_logo} style={styles.logo} />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* seperator */}
        <View style={styles.separator}>
          <View style={styles.line} />
            <Text style={styles.msg}>Or</Text>
          <View style={styles.line} />
        </View>


            {/* textbox */}
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
                value={email}
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
          <View>
    </View>

           <View style = {styles.checkbox_container}>
            <Pressable 
                style={[styles.checkbox, isChecked && styles.checked]} 
                onPress={() => setIsChecked(!isChecked)}
              /> 
              <Text style={styles.check_mess}>I agree to the Terms of Service and Privacy{'\n'}Policy</Text>
           </View>

           <TouchableOpacity style={styles.login_btn}><Text style={styles.login_text}>Sign Up</Text></TouchableOpacity>

          <View style = {styles.footer_signin}>
          <Text style={styles.signup}>Already have an account?  
          <Link href={"/"} style={styles.sign_link}> Sign In</Link> </Text>
          </View>
        </ScrollView>
    </KeyboardAvoidingView>


    </View>
  )
}

export default create_acc