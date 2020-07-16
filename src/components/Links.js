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
export default function Links(props) {
  return (
    <TouchableOpacity onPress={props.onPress} onPressOut={this.props}>
      <Text style={styles.links}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  // container: {
  //  // flex: 1,
  //   backgroundColor: "red",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },

  links: {
    color: "#455a64",
    fontSize: 18,
    //backgroundColor:'green',
    fontWeight: "500",
   // paddingTop: 8
   marginTop:8
  }
});
