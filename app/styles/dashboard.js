import {StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    dashboard:{
        flex:  1,
        margin: 0,
        padding:10,
        flexDirection: 'column',   
        justifyContent: 'center',   
        alignItems: 'center',       
        backgroundColor: 'white',
    },
    header:{
        justifyContent: 'center',
       

    }
    
   
})

export default styles;