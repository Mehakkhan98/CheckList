
import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View,Platform, Alert,TextInput,ScrollView, Switch,TouchableOpacity,SafeAreaView,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Dimensions} from 'react-native';
import Button from '../components/Button';
import InputBox from '../components/Inputfield';
import styles from '../Style/Style';
import Links  from '../components/Links';
import { Actions } from "react-native-router-flux";
import CustomText from '../components/Normaltext';
import { Ionicons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';
//import { ScrollView } from 'react-native-gesture-handler';
const digitsPattern = /^\d+$/
export default function Sform() {

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setmail] = useState('');
  const [city, setcity] = useState('');
  const [pass, setpass] = useState('');
  const [repass, setrepass] = useState('');
  const [Unique,setUnique]=useState(false);
  const [uname,setuname]=useState('');
  const [showPassword,setShowPassword]=useState(true);
  const [showPassword2,setShowPassword2]=useState(true);

  const [Submit, setSubmit] = useState(false);
  const [nameerror, setnameerror] = useState(false);
  const [phoneerror, setphoneerror] = useState(false);
  const [usererror, setusererror] = useState(false);
  const [mailerror, setmailerror] = useState(false);
  const [passerror, setpasserror] = useState(false);
  const [cityerror, setcityerror] = useState(false);

  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");

  const checkname = new RegExp(/^[a-z A-Z]{3,40}$/);
  const checkemail =new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)
  const checkusername =new RegExp( /^[A-Za-z0-9_]{4,20}$/)
  const checkpassword = new RegExp( /^[A-Za-z0-9!@#$%^&*()_]{9,20}$/)
  const checkuseraddress =new RegExp( /^[ A-Za-z0-9/_]{10,35}$/)
  const checkuserphone =new RegExp( /^[0-9_]{11,11}$/)

 useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude)
    
    });
    
}, []);


  toggleSwitch=()=>{
    if(showPassword==false){
      setShowPassword(true)
    }
      else{
        setShowPassword(false)
      }
  }
  
  toggleSwitch2=()=>{
    if(showPassword2==false){
      setShowPassword2(true)
    }
      else{
        setShowPassword2(false)
      }
  }
  loginScreen=()=>{
    Actions.login();
  }
  const mailvalue=(value)=>{
    setmail(value);
   
   }
   const username=(value)=>{
    setuname(value);
   
   }

   const passvalue=(value)=>{
    setpass(value);
   
   }
   const namevalue=(value)=>{
    setname(value);
    
   }
   const phonevalue=(value)=>{
    setphone(value);
    
   }
   const cityvalue=(value)=>{
    setcity(value);
    
   }
   const repassvalue=(value)=>{
     
    setrepass(value);
    
   }
   UniqueUser=async ()=>{
  
    console.log("checkkkkkkkkkkkkkkkkkkkkkkk",Unique) 
      const newTodo = {
        User_Name:uname
        
      };

        axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_UserName',newTodo)
      .then(
        (response2) => 
        {
         
         if(response2.data.length===0&&checkusername.test(uname)){
         
            setUnique(true),
       
          console.log("checkkkkkkkkkkkkkkkkkkkkkkk",Unique)
         }
        //  else{
        //   setUnique(false),
        //   console.log("checkkkkkkkkkkkkkkkkkkkkkkk",Unique)
        //  }
        }
      )
        
          
        
  }

 
  signup=(e)=>{
    UniqueUser();
    setSubmit(true)
    if(name==""|| phone==""|| email==""||city==""|| pass==""|| repass==""||uname=="")
    {
      Alert.alert(
       
        'Sign up',
       
        
        'Carefully Fill Teacher Registration Form!',
       
      );
    }
    else if(name!=""&& phone!=""&& email!=""&&city!=""&&pass!=""&& repass!=""&&uname!=""){
     {(checkname.test(name))?setnameerror(false): setnameerror(true)  }
     
     {(checkusername.test(uname))?setusererror(false): setusererror(true)}
     {(checkuserphone.test(phone))?setphoneerror(false):  setphoneerror(true) }
     {(checkemail.test(email))? setmailerror(false): setmailerror(true)  }
     {(checkuseraddress.test(city))?setcityerror(false):setcityerror(true) }
      {(checkpassword.test(pass))? setpasserror(false): setpasserror(true) }
      {repass.length> 1 && repass!==pass?
    
      Alert.alert(
           
        'Student Registration!',
       
        
        'Password should be Match!',
       
      ):null
    } 
    

    
    }
   
 
      if(checkname.test(name)&&checkusername.test(uname)&&checkpassword.test(pass)
      &&checkemail.test(email)&&checkuseraddress.test(city)&&checkuserphone.test(phone)&&Unique===true)
    
     {
       
   
   
      const newTodo = {
        Teacher_Name:name,
        User_Name:uname,
        Teacher_Phone:phone,
        Teacher_Email: email,
        Teacher_Password: pass,
        Teacher_Adress:city,
        Lat:Latitude,
        Lang:Longitude,
      };

      axios.post('http://192.168.8.103:4000/online_tutor_db/add', newTodo)
      .then(() => Alert.alert(
       
        'Teacher Registration',
       
        'Account Created Successfully' ,            
        [
          {text: 'OK', onPress: () =>  Actions.login()},
         
        ],
        { cancelable: false }))
      .catch(err=>alert(err)); 
      
      

      
        
         
    
      
    
  
  }
   









  }
    return (
   
      <SafeAreaView style={styles.sformcontainer}>
      
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      
      <KeyboardAvoidingView  >
      
       
          <View
           style={{
             flexDirection: "row",
            
             borderBottomWidth:1,
             height:Platform.Os=='android'?80:38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
       //      paddingVertical: 5
           }}
         >
           <Ionicons name="ios-person" size={32} color="#455a64" />
           <TextInput
             style={{ marginLeft: 10, flex: 1,padding:0 }}
             autoFocus={true}
             autocorrect={false}
             minLength={3}
             maxLength={21}
             spellCheck={false}
             placeholder="Teacher Name"
             placeholderTextColor="#455a64"
             onChangeText={namevalue}
             clearButtonMode="always"
           />
         </View>
         {nameerror==true?<Text style={{color:'red'}}>Enter valid Name</Text>:null}
       
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
             paddingVertical: 5
           }}
         >
           <Ionicons name="ios-person" size={32} color="#455a64" />
           <TextInput
             style={{ marginLeft: 10, flex: 1 ,padding:0}}
             autoFocus={true}
             autocorrect={false}
             minLength={5}
             maxLength={21}
             spellCheck={false}
             placeholder="User Name"
             placeholderTextColor="#455a64"
             onChangeText={username}
             clearButtonMode="always"
           />
         </View>
         {usererror==true?<Text style={{color:'red'}}>User_Name Should only contain A_Z 1_9 _ </Text>:null}
        {usererror===false&&Unique===false&&Submit===true?<Text style={{color:'red'}}>User_Name Should be  Unique</Text>:null}
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
             paddingVertical: 5
           }}
         >
           <Ionicons name="ios-call" size={32} color="#455a64" />
           <TextInput
             style={{ marginLeft: 10, flex: 1 ,padding:0}}
             autoFocus={true}
             autocorrect={false}
             minLength={11}
             maxLength={11}
             spellCheck={false}
             keyboardType={'numeric'}
             placeholder="Tecaher Phone #"
             placeholderTextColor="#455a64"
             onChangeText={phonevalue}
             clearButtonMode="always"
           />
         </View>
         {phoneerror==true?<Text style={{color:'red'}}>Phone # Should be 11 char long</Text>:null}
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
             paddingVertical: 5
           }}
         >
           <Ionicons name="ios-mail" size={32} color="#455a64" />
           <TextInput
             style={{ marginLeft: 10, flex: 1 }}
             autoFocus={true}
             autocorrect={false}
             spellCheck={false}
             placeholder="Teacher Email"
             placeholderTextColor="#455a64"
             onChangeText={mailvalue}
             clearButtonMode="always"
           />
             
         </View>
         {mailerror==true?<Text style={{color:'red'}}>Enter valid email address</Text>:null}
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
             paddingVertical: 5
           }}
         >
           <Ionicons name="ios-home" size={32} color="#455a64" />
           <TextInput
             style={{ marginLeft: 10, flex: 1 }}
             autoFocus={true}
             autocorrect={false}
             spellCheck={false}
             placeholder="Enter Postal address"
             placeholderTextColor="#455a64"
             onChangeText={cityvalue}
             clearButtonMode="always"
           />
          
         </View>
       {cityerror==true?<Text style={{color:'red'}}>Enter valid Home address</Text>:null}
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
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
             autoFocus={true}
             autocorrect={false}
             spellCheck={false}
             placeholder="Password"
             placeholderTextColor="#455a64"
             onChangeText={passvalue}
           />
            <Switch
             trackColor={{true: 'grey', false: 'red'}}
             style={{ transform: [{ scaleX: .6 }, { scaleY: .6}] }}
           onValueChange={toggleSwitch}
           value={showPassword}
         /> 
         </View>
         {passerror==true?<Text style={{color:'red'}}>Password should atleast 8 char long</Text>:null}
         <View
           style={{
             flexDirection: "row",
             borderBottomWidth:1,
             height: 38,
             width: "100%",
             borderColor: "#455a64",
             marginVertical: 3,
             paddingHorizontal: 7,
             paddingVertical: 5
           }}
         >
           <Ionicons name="ios-lock" size={32} color="#455a64" />
           <TextInput
           secureTextEntry={showPassword2}
             style={{ marginLeft: 10, flex: 1 }}
             autoFocus={true}
             autocorrect={false}
             spellCheck={false}
             placeholder="Re-Password"
             placeholderTextColor="#455a64"
             onChangeText={repassvalue}
           />
            <Switch
             trackColor={{true: 'grey', false: 'red'}}
             style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
           onValueChange={toggleSwitch2}
           value={showPassword2}
         /> 
         
         </View>
         <View style={{marginTop:3}}>
         <Button onPress={this.signup} text="Sign Up" />
         </View>
        
         </KeyboardAvoidingView>
     
         </TouchableWithoutFeedback>
        
         </SafeAreaView>
        
    
 
    )
          } 
  
 