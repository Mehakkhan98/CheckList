import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../Style/Style';
export default function Inputfield(props) 
{
    return(
        <KeyboardAvoidingView style={{width:250}}>
        <TextInput style={styles.inputbox}
         placeholder={props.text} 
          placeholderTextColor="#455a64"
           autocorrect={false}
            spellCheck={false}
            onChangeText={props.onChangeText}
             required
 />
       
        
        </KeyboardAvoidingView>
    )
}
