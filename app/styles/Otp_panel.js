import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    otp_container: {
        flex: 1,
        margin:0,
        padding:10,
        flexDirection: 'column',   
        justifyContent: 'flex-start',   
        alignItems: 'flex-start',       
        backgroundColor: 'white',
        
    },
    text_container: {
       margin: 10,
       marginTop: 20
    },
    txt_verify:{
        color: '#4CAF50',
        fontWeight: 900,
        fontSize: 28
    },
    txt_subtext:{
        color: '#666666',
        fontSize: 16    
    }
})

export default styles;