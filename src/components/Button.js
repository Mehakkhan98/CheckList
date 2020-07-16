import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Actions } from "react-native-router-flux";
import Styles from "../Style/Style";
import { LinearGradient } from "expo-linear-gradient";
export default function Button(props) {
  return (
    <TouchableOpacity
      style={Styles.buttonStyle}
      onPress={props.onPress}
      onPressOut={this.props}
    >
      <Text style={Styles.buttontext}>{props.text}</Text>
    </TouchableOpacity>
  );
}
// const styles = StyleSheet.create({
//     // container: {
//     //   flex: 1,
//     //     backgroundColor: '#ffff',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // }

//   });
