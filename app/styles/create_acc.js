import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      container: {
        flex:  1,
        margin:0,
        padding:10,
        flexDirection: 'column',   
        justifyContent: 'center',   
        alignItems: 'center',       
        backgroundColor: 'white',
      },
      txt_container: {
        fontFamily: 'Inter', 
        justifyContent: 'flex-end',
        marginRight: '25%',
        marginTop: '10%'
      },
      Text: {
        color: '#4CAF50',
        fontSize: 35,
        fontWeight: "900",
    },
    subText: {
        marginTop: 2,
        fontSize: 17,
        color: '#666666'
    },
    logo_container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      gap: 10,
      marginTop: 20,
      width:'100%',
      maxWidth: 342,
    },
    logo:{
      width: 30,
      height: 30
    },
    social_btn:{
      width: 342,
      height: 52,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      elevation: 8,
      marginBottom: 12

      },
      msg: {
        fontSize: 16,
        color: '#666666',
        fontWeight: "900",
        marginVertical: 10,
        paddingHorizontal: 5, // Adds space on the sides
        marginHorizontal: 5, // Extra spacing
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
        width: '90%',
      },
      input_email: {
        width: '330',
        height: 45,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 8,
        fontSize: 16,
        borderColor: 'gray',
        backgroundColor: '#F5F5F5',
      },
      input_name: {
        width: 330,
        height: 45,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: 'gray',
        backgroundColor: '#F5F5F5',
      },
      input_password: {
        width: 330,
        height: 45,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: 'gray',
        backgroundColor: '#F5F5F5',
      },
      input_number: {
        width: 330,
        height: 45,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#F5F5F5',
        elevation: 3,
        borderColor: 'gray',
      },
      box_name:{
        marginBottom: 10,
        fontWeight: 600
      },
      full_box_name: {
        marginTop: 10
      },
      pass_res:{
        fontSize: 12,
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 4,
        marginTop: '6.5%',
        //marginLeft: '-3%',
      },
      checked: {
        backgroundColor: '#4CAF50',
        
      },
      checkbox_container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '-4%'
      },
      check_mess:{
        marginTop: '6%',
        fontSize: 14,
        marginLeft: '3%'
      },
      login_btn: {
        width: '330',
        height: 56,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 9999,
        paddingHorizontal: 10,
        fontSize: 16,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
      },
      login_text: {
        fontWeight: 600,
        color: '#FFFFFF',
        fontSize: 20,
        fontStyle: 'Inter'
      },
      signup:{
        color: "black",
        fontSize: 15
      },
      sign_link: {
        color: '#4CAF50',
        fontWeight: "bold"
      },
      footer_signin: {
        marginTop: '9%',
        justifyContent: 'center',
        alignItems: 'center',
      }

})

export default styles;