import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Switch,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
// import firebase from 'react-native-firebase';
import axios from "axios";
import { AsyncStorage } from "react-native";
import Button from "../components/Button";
import InputBox from "../components/Inputfield";
import Toggle from "../components/Togglebutton";
import Background from '../Style/Color';
import Logo from "../components/Logo";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Style/Style";
import { Actions } from "react-native-router-flux";

export default function LForm(props) {
  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");
  const [state, setstate] = useState("Student");
  const [showPassword,setShowPassword]=useState(true);

  toggleSwitch=()=>{
    if(showPassword==false){
      setShowPassword(true)
    }
      else{
        setShowPassword(false)
      }
  }
  savedata = async () => {
    try {
      await AsyncStorage.removeItem("User_Name");
      await AsyncStorage.removeItem("Password");
      await AsyncStorage.setItem("User_Name", uname);
      await  AsyncStorage.setItem("Password", pass);
    } catch (error) {
      // Error saving data
    }
    try {
      const value = await AsyncStorage.getItem("User_Name");
      if (value !== null) {
        // We have data!!
        console.log("Session Value", value);
      }
    } catch (error) {
      // Error retrieving data
    }
    try {
      const value1 = await AsyncStorage.getItem("Password");
      if (value1 !== null) {
        // We have data!!
        console.log("Session Value", value1);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
 LoginWithGoogle= async()=>{
  alert("I am login with Google")
 }
 LoginWithFacebook= async()=>{
  alert("I am login with facebook")
 }
 LoginWithGithub= async()=>{
  alert("I am login with Github")
 }
  teacher = e => {
    setstate(e);
    props.tdata(e);
  };
  student = e => {
    setstate(e);
    props.sdata(e);
  };
  login = () => {
    if (uname === "" || pass === "") {
      Alert.alert(
        "Login",

        "Must Fill all the fields Carefully"
      );
    } else {
      if (state === "Teacher") {
        const newTodo = {
          User_Name: uname,
          Password: pass
        };

        axios
          .post(
            "http://192.168.8.101:4000/online_tutor_db/Login_Teacher",
            newTodo
          )
          .then(
            () =>
              Alert.alert(
                "Teacher Login",

                "Login Successfully",
                [{ text: "OK", onPress: () => Actions.T_home() }],
                { cancelable: false }
              ),
            savedata()
          )
          .catch(() =>
            Alert.alert(
              "Teacher Login",

              "Invalid UserName o Password!                               Do you Forget Password?",
              [
                { text: "Yes", onPress: () => Actions.fScreen() },
                { text: "NO", onPress: () => console.log(), style: "cancel" }
              ],
              { cancelable: false }
            )
          );
      } else if (state === "Student") {
      
        const newTodo = {
          User_Name: uname,
          Password: pass
        };

        axios
          .post(
            "http://192.168.8.101:4000/online_tutor_db/Login_Student",
            newTodo
          )
          .then(
            () =>
              Alert.alert(
                "Student Login",

                "Login Successfully",
                [{ text: "OK", onPress: () => Actions.S_home() }],
                { cancelable: false }
              ),
            savedata()
          )

          .catch(() =>
            Alert.alert(
              "Student Login",

              "Invalid User Name or Password                                Do you Forget Password?",
              [
                { text: "Yes", onPress: () => Actions.fScreen() },
                { text: "NO", onPress: () => console.log(), style: "cancel" }
              ],
              { cancelable: false }
            )
          );
       }
     }
   
  };
  const unamevalue = value => {
    setuname(value);
  };
  const passvalue = value => {
    setpass(value);
    bygmail = () => {
      alert("login");
    };
  };
  
  return (
  
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
       
      <View style={styles.lcontainer}>
       
        <Text
          style={{
            color: "#455a64",
            fontSize: 22,
            marginVertical:10,
            fontWeight: "700"
            
          }}
        >
          Login
        </Text>
        <View style={styles.buttoncontainer}>
          <Toggle text="Teacher" onPress={() => this.teacher("Teacher")} />

          <Toggle text="Student" onPress={() => this.student("Student")} />
        </View>
        {/* <KeyboardAvoidingView> */}
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            height: 45,
            width: "100%",
            borderColor: "#455a64",
            marginVertical: 3,
            paddingHorizontal: 7,
            paddingVertical: 5
          }}
        >
          <Ionicons name="ios-person" size={32} color="#455a64" />
          <TextInput
            style={{ marginLeft: 10, flex: 1 }}
            autoFocus={true}
            autocorrect={false}
            clearButtonMode="always"
            spellCheck={false}
            placeholder="Username"
            placeholderTextColor="#455a64"
            onChangeText={unamevalue}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            height: 45,
            width: "100%",
            borderColor: "#455a64",
            marginVertical: 3,
            paddingHorizontal: 7,
            paddingVertical: 5
          }}
        >
          <Ionicons name="ios-lock" size={32} color="#455a64" />
          <TextInput
            secureTextEntry={showPassword}
            style={{ marginLeft: 10, flex: 1 }}
            autocorrect={false}
            spellCheck={false}
            placeholder="Password"
            placeholderTextColor="#455a64"
            onChangeText={passvalue}
          />
            <Switch
            trackColor={{true: 'grey', false: 'red'}}
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
          onValueChange={toggleSwitch}
          value={showPassword}
        /> 
        </View>
        {/* </KeyboardAvoidingView> */}
        <View>
          <Button onPress={this.login} text="Login" />
        </View>

        <View style={styles.logocontainer2}>
          <View>
            <TouchableOpacity onPress={LoginWithGoogle}>
              <Image
                style={{
                  marginLeft: 13,
                  width: 50,
                  height: 50,
                  resizeMode: "contain"
                }}
                source={require("../Images/mail.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={LoginWithFacebook}>
              <Image
                style={{
                  marginLeft: 13,
                  width: 50,
                  height: 50,
                  resizeMode: "contain"
                }}
                source={require("../Images/f1.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={LoginWithGithub}>
              <Image
                style={{
                  marginLeft: 13,
                  width: 50,
                  height: 50,
                  resizeMode: "contain"
                }}
                source={require("../Images/i1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
