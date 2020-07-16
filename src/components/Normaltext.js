import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Styles from '../Style/Style';
export default function Normaltext(props) 
{
    return(
    <Text style={Styles.signuptext}>{props.text}</Text>
    )
}
// const styles = StyleSheet.create({
//     // container: {
//     //   flex: 1,
//     //     backgroundColor: '#ffff',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // },
  
//   });