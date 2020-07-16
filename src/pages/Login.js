import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  ImageBackground
} from "react-native";
import Logo from "../components/Logo";
import Mode from '../components/ChangeModeToggal';
import Form from "../components/LForm";
import NavigationBar from "react-native-navbar-color";
import CustomText from "../components/Normaltext";
import BoldText from "../components/BoldText";
import Links from "../components/Links";
import CustomStatusBar from '../components/StatusBar';
import { Actions } from "react-native-router-flux";
import styles from "../Style/Style";
export default function Login() {
  const [category, setCategory] = useState("Student");
  signupTeacher = () => {
    Actions.signupT();
  };
  signupStudent = () => {
    Actions.signupS();
  };
  invoketeacher = e => {
    setCategory(e);
  };
  invokestudent = e => {
    setCategory(e);
  };
  
  return (
    
    <View style={styles.logincontainer}>
      <CustomStatusBar/>
     <Mode/>
      <Logo data={category}/> 
        
      <View   style={{ justifyContent: "center", alignItems: "center" }}>
        <Form tdata={this.invoketeacher} sdata={this.invokestudent} />
      </View>

      <View style={styles.containertext}>
        <CustomText text="Don't have an account yet?" />
        {category == "Teacher" ? (
          <Links text="Sign Up Teacher!" onPress={this.signupTeacher} />
        ) : (
          <Links text="Sign Up Student!" onPress={this.signupStudent} />
        )}
      </View>
    </View>
    
  );
}
