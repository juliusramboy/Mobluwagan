import { View, Text } from 'react-native'
import React from 'react'
import styles from '@/app/styles/Otp_panel'

const Otp_panel = () => {
  return (
    <View style={styles.otp_container}>

      <View style = {styles.text_container}>
        <Text style = {styles.txt_verify}>Verification Code</Text>
        <Text tyle = {styles.txt_subtext}>Please enter the code sent to</Text>
      </View>
        
    </View>
  )
}

export default Otp_panel