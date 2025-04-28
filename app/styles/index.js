import { StyleSheet } from "react-native"; // ess

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:0,
      padding:10,
      flexDirection: 'column',   
      justifyContent: 'center',   
      alignItems: 'center',       
      backgroundColor: 'white',
    },
    text: {
      color:  'black',
      fontSize: 30,
      fontFamily: 'Inter',       
      fontWeight: 'bold',
      textAlign: 'center',      
      marginTop: 10,             
    },
    img: {
      height: 150,
      width: 150,
    },
    subtext: {
      fontSize: 16,
      fontWeight: 'medium',
      color : "#666666"
    },
    input_email: {
      width: '100%',
      maxWidth: 400,
      height: 56,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 12,
      paddingHorizontal: 10,
      fontSize: 16,
      marginTop: 50, 
      backgroundColor: '#F5F5F5',
    },
    input_password: {
      width: '100%',
      maxWidth: 400,
      height: 56,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 12,
      paddingHorizontal: 10,
      fontSize: 16,
      marginTop: 10,

      backgroundColor: '#F5F5F5',
    },
    Link: {
      textAlign: 'right',
      width: '100%',
      maxWidth: 400,
      marginTop: 10,
      textDecorationLine: 'underline',
      fontWeight: 'medium',
      fontSize: 14,
      color: '#4CAF50',
    },
    login_btn: {
        width: '100%',
        maxWidth: 300,
        height: 56,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 9999,
        paddingHorizontal: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
    },
    login_text: {
      fontWeight: 'semibold',
      fontSize: 20,
      color: '#FFFFFF'
    },
    msg: {
      fontSize: 14,
      color: '#666666',
      
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    separator: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      width: '80%',
    },
    google_btn: {
      width:'100%',
      maxWidth: 103.3,
      height: 48,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
  },
  socialContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 10,
    marginTop: 20
  },
  logo:{
  width: 30,
  height: 30
  },
  social_btn:{
  width:'100%',
  maxWidth: 103.3,
  height: 48,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'lightgray',
  elevation: 3,
  borderColor: 'gray',
  marginBottom: '7%'
  },
  signup:{
    marginTop: 20,
    color: "black",
    fontSize: 15
  },
  sign_link: {
    color: '#4CAF50',
    fontWeight: "bold"
  }


  });

  export default styles; //ess
