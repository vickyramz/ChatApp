import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView ,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';

export default class Welcome extends React.Component {
  static navigationOptions = {
   
}
  render() {
    const {navigate}=this.props.navigation;
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}>
   <View style={styles.containers}>   
       <Text style={{color:'#7f7f7f',fontWeight: 'bold',  fontSize: 25,textAlign:"center",marginLeft:25,marginRight:25}}>WELCOME!</Text> 
       <Text style={{color:'#7f7f7f',textAlign:"center",marginLeft:25,marginRight:25,marginTop:10}}>Welcome this this Chatting app</Text>  
       <View style={styles.ButtonRow}>
       <TouchableOpacity style={styles.buttonContainer}   onPress={() => this.props.navigation.navigate('Chat',{name:'Chattings'})} >
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity> 

       </View>
      
       </View> 
   </View>
       
 
    
    );
}
}
const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#fbfbfb',
  },
  ButtonRow: {
    justifyContent: 'center', 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: '#fbfbfb',

   
  },
  input:{
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 0.5,
     
      borderColor: '#d6d7da',
      width: '50%',
      color: '#000'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '40%',
      marginTop:15,
     
      paddingVertical: 15
  },
  SignInbuttonContainer:{
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop:15,
    marginLeft:10,
    paddingVertical: 15
},
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});