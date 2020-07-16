import React from 'react';
import {Actions} from 'react-native-router-flux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import styles from '../Style/Style';

export default function Togglebutton(props) 

{
  check=()=>{
    Actions.home();
  }
    return(
         
        <TouchableOpacity style={styles.toglebutton}   onPress={props.onPress} onPressOut={this.props}>
        <Text style={styles.buttontext}>
            {props.text}
        </Text>
       </TouchableOpacity>
    
    )
}
