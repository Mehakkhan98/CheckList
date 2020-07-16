import React,{ useState } from 'react';
import { StyleSheet, Text,Alert, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import InputBox from '../components/Inputfield';
import Toggle from '../components/Togglebutton';
import Logo from '../components/Logo';
import styles from '../Style/Style';
import Links  from '../components/Links'
import { Ionicons } from "@expo/vector-icons";
import {Actions} from 'react-native-router-flux';
export default function LForm(props) {
  const [email, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [repass, setrepass] = useState('');
  const [state,setstate]=useState('Student')
 teacher=(e)=>{
   setstate(e);
    props.tdata(e);
   
 }
 student=(e)=>{
   setstate(e);
    props.sdata(e)
 }
 login=()=>{
    if(email==="" || pass===""|| repass==="")
    {
      
      Alert.alert(
       
        'Login',
       
        
        'Must Fill all the fields Carefully',
       
      );
    }
     if(pass!==repass){
      alert("Password and Re-Password should b match!")

    }
    else
    {
      console.log("pass",pass);
      console.log(repass);
      if(state==="Teacher" && pass==repass)
      {
       
        const newTodo = {
         User_Name:email,
          Teacher_Password:pass,
          
        };
  
        axios.post('http://192.168.8.103:4000/online_tutor_db/update/', newTodo)
        .then(() =>  Alert.alert(
       
          'Forget Password!',
          'Updated  Successfully!' ,              
          [
            {text: 'OK', onPress: () =>  Actions.login()},
           
          ],
          { cancelable: false }))
        .catch(()=>Alert.alert(
       
          'Teacher Updated Failed',
         
          'Server Error May be!' ,            
          [
           
            {text: 'OK', onPress: () =>  console.log(),style: 'cancel'},
          ],
          { cancelable: false }));
  
        
  
        
           
      }
      else if(state==="Student" && pass==repass)
      {
        const newTodo = {
         User_Name:email,
          Student_Password:pass,

          
        };
  
        axios.post('http://192.168.8.103:4000/online_tutor_db/Studentupdate/', newTodo)
        .then(() => Alert.alert(
       
          'Forget Password!',
          'Updated  Successfully!' ,   
                
          [
            {text: 'OK', onPress: () =>  Actions.login()},
           
          ],
          { cancelable: false }))
        .catch(()=> 
            Alert.alert(
       
              'Student Updated Failed',
             
              'Server Error May be!' ,            
              [
                {text: 'OK', onPress: () =>  console.log(),style: 'cancel'},
               
              ],
              { cancelable: false })); 
        

      }
    }
    
   
   
 }
 const mailvalue=(value)=>{
  setmail(value);
  console.log("mail",email)
 }
 const passvalue=(value)=>{
  setpass(value);
  console.log("mail",pass)
 }
 const repassvalue=(value)=>{
  setrepass(value);
  console.log("mail",repass)
  
 }
    return (
      <View style={styles.lcontainer}>
         <Text
          style={{
            color: "#455a64",
            fontSize: 22,
            marginBottom: 2,
            marginTop: 15,
            fontWeight: "700"
            
          }}
        >
          Don't Worry if you Forget
        </Text>
        <Text
          style={{
            color: "#455a64",
            fontSize: 22,
            marginBottom: 25,
            marginTop: 1,
            fontWeight: "700"
            
          }}
        >
          Your Password!
        </Text>
         <View style={styles.buttoncontainer}>
          
       <Toggle text="Teacher" onPress={()=>this.teacher("Teacher")}/>
       <Toggle text="Student" onPress={()=>this.student("Student")} />
         </View>
        
         
          <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            spellCheck={false}
            placeholder="User Name"
            placeholderTextColor="#455a64"
            clearButtonMode="always"
            onChangeText={mailvalue}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            style={{ marginLeft: 10, flex: 1 }}
            autocorrect={false}
            spellCheck={false}
            autoFocus={true}
            maxLength={14}
            secureTextEntry={true}
            placeholder="New Password"
            placeholderTextColor="#455a64"
            onChangeText={passvalue}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            style={{ marginLeft: 10, flex: 1 }}
            autocorrect={false}
            autoFocus={true}
            spellCheck={false}
            maxLength={14}
            secureTextEntry={true}
            placeholder="Re-Type New Password"
            placeholderTextColor="#455a64"
            onChangeText={repassvalue}
          />
        </View>
       
            
      
      <View style={{marginTop:10}}>
       <Button onPress={this.login} text="Update" />
       </View> 
       <View style={{marginTop:50}}>
       <Links  text="Back to Login?" onPress={this.signupStudent}/> 
       </View>
      
       </View>
    );
  }
  
 