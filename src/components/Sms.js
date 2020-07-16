import React, { Component } from 'react';
import { View, StyleSheet, Button,Text, Linking,TouchableOpacity, Alert } from 'react-native';
import * as  Constants  from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
  _handleButtonPress = () => {
   Linking.openURL(`sms:`+this.props.data)
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  onPress={this._handleButtonPress}>
        <Ionicons name="ios-chatboxes" size={32} color="red"/>
        <Text style={{ color:"#696969"}}>Sms</Text>
        </TouchableOpacity>
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  //  backgroundColor: '#ffffff',
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: '#34495e',
  // },
});
