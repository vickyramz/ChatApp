import {
    StyleSheet,
    TextInput, // 1. <- Add this 
    View,Text,
    TouchableOpacity, // <- Add TouchableOpacity
  } from 'react-native';
  import React from 'react';
 export default class Main extends React.Component {
    state = { name: '' } // 2. <- Add the component state
    render() {
        //const{navigate}=this.props.navigation;
      return (
        <View>
        
        <Text style={styles.title}>Enter your name:</Text> 
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={(name)=>this.setState({name:name})}
          value={this.state.name}
        />
     
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      );
    }
    onPress = () => {
        // 1.
        this.props.navigation.navigate('Chat', { name: this.state.name });
      }
  }
  const offset = 24;
  const styles = StyleSheet.create({
    nameInput: { // 3. <- Add a style for the input
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
    title: { // 4.
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
      },
      buttonText: { // 5.
        marginLeft: offset,
        fontSize: offset,
      },
  });