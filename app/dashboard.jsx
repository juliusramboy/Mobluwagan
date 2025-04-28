import { View, Text } from 'react-native'
import React from 'react'
import styles from '@/app/styles/dashboard';

const dashboard = () => {
  return (
    <View style = {styles.dashboard}>

      <View style = {styles.header}>
      <Text style={styles.header1_txt}>Dashboard</Text>
      <Text style={styles.header2_txt}>Magandang araw,</Text>
      </View>

      <View style = {styles.body}>
        <View style = {styles.box1}>
          <View style = {styles.bigbox}></View>
        </View>
        <View style = {styles.box2}></View>
      </View>

      <View style = {styles.foot}>
      
      </View>
      
    </View>
  )
}

export default dashboard