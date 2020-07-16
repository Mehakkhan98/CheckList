import React from "react";

import CustomText from "./Normaltext";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "../Style/Style";
export default function Logo(props) {
  return (
    <View style={styles.logocontainer}>
      <Image
        style={{ width: 70, height: 70 ,borderRadius:5}}
        source={require("../Images/tlogo.png")}
      />

      {props.data == "Teacher" ? <CustomText  style={{ color: "#455a64", fontSize: 18 }} text="Start Your Journey As Teacher"  /> :     <CustomText
          style={{ color: "#455a64", fontSize: 18 }}
          text="Find Your Tutor Online!"
        />
      }
    </View>
  );
}
