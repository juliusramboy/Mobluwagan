import {StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    dashboard:{
        height:  hp(100),
        backgroundColor: 'white',
    },
    header:{
        backgroundColor: 'tomato',
        height: hp(10),
        marginBottom: 4,
        marginTop: 2
    },
    body:{
        height: hp(50),
        marginBottom: 4,
    },
    box1:{
        backgroundColor: 'green',
        height: hp(25),
        marginBottom: 4,
        justifyContent: 'center',
        
    },
    box2:{
        backgroundColor: 'yellow',
        height: hp(25),
        marginBottom: 4,
    },
    foot:{
        backgroundColor: "red",
        height: hp(30),
    },
    header1_txt:{
        fontSize: hp(3.5),
        marginTop: 12,
        marginLeft: 20,
    },
    header2_txt:{
        fontSize: hp(1.5),
        marginLeft: 20
    },
    bigbox:{
        backgroundColor: 'blue',
        height: hp(20),
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 12
    }
   
})

export default styles;