import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    otp_container: {
        flex:  1,
        margin:0,
        padding:10,
        flexDirection: 'column',   
        justifyContent: 'flex-start',   
        alignItems: 'flex-start',       
        backgroundColor: 'white',
    },
    text_container: {
       justifyContent: "center",
       alignItems: 'center',
       marginTop: "100",
    },
    subtext:{
        color: 'green',
        fontWeight: 900,
        fontSize: 30
    },
    verify_msg:{
        textAlign: 'center',
        marginLeft: 10,
        marginRightL: 10,
        marginBottom: 50,
        marginTop:10
    },
    reminder:{
        fontWeight: 600,
        fontSize: 15
    },
    img: {
        height: 150,
        width: 150,
    }

})

export default styles;