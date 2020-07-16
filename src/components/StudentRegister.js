import React,{ useState,useEffect }  from 'react';
import { StyleSheet, Text, View, Alert,TextInput, Switch,TouchableOpacity,KeyboardAvoidingView ,TouchableWithoutFeedback,SafeAreaView,ScrollView} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import InputBox from '../components/Inputfield';
import {Actions} from 'react-native-router-flux';
import { Ionicons } from "@expo/vector-icons";
import styles from '../Style/Style';
//import { ScrollView } from 'react-native-gesture-handler';
export default function Sform() {
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setmail] = useState('');
  const [city, setcity] = useState('');
  const [Unique,setUnique]=useState(false);
  const [pass, setpass] = useState('');
  const [repass, setrepass] = useState('');
  const [uname, setuname] = useState('');
  const [data,setdata]=useState([]);
  const [isValid, setisValid] = useState(null);
  const [showPassword,setShowPassword]=useState(true);
  const [showPassword2,setShowPassword2]=useState(true);

  const [Submit, setSubmit] = useState(false);

  const [nameerror, setnameerror] = useState(false);
  const [phoneerror, setphoneerror] = useState(false);
  const [mailerror, setmailerror] = useState(false);
  const [usererror, setusererror] = useState(false);
  const [passerror, setpasserror] = useState(false);
  const [cityerror, setcityerror] = useState(false);

  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");
  const checkname = new RegExp(/^[ a-z A-Z]{3,40}$/);
  const checkemail =new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)
  const checkusername =new RegExp( /^[ A-Za-z0-9_]{4,20}$/)
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
    
    checklist2=()=>{
      alert("hello from check")
    setcheck(true)
   }
  
  
  
    UniqueUser=async ()=>{
  
    console.log("checkkkkkkkkkkkkkkkkkkkkkkk",Unique) 
      const newTodo = {
        User_Name:uname
        
      };

        axios.post('http://192.168.8.103:4000/online_tutor_db/Student_By_User_Name',newTodo)
      .then(
        (response2) => 
        {
          
         if(response2.data.length===0&&checkusername.test(uname)){
         
            setUnique(true)
       
         
         }
        //  else{
        //   setUnique(false)
      
        //  }
        }
      )
        
          
        
  }

  
  signup=()=>{
    console.log("latitude",Latitude);
    console.log("longitude",Longitude)
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
  
    console.log("Unique",Unique)
      if(checkname.test(name)&&checkusername.test(uname)&&checkpassword.test(pass)
      &&checkemail.test(email)&&checkuseraddress.test(city)&&checkuserphone.test(phone)&&Unique===true)
     {
        
    
       const newTodo = {
         Student_Name:name,
         User_Name:uname,
         Student_Phone:phone,
         Student_Email: email,
         Student_Password: pass,
         Student_Adress:city,
         Lat:Latitude,
         Lang:Longitude
       };
 
       axios.post('http://192.168.8.103:4000/online_tutor_db/Students', newTodo)
       .then(() => Alert.alert(
       
        'Student Registration',
       
        'Account Created Successfully!' ,            
        [
          {text: 'OK', onPress: () =>  Actions.login()},
         
        ],
        { cancelable: false }))
       .catch(err=>console.log(err)); 
 
       
 
       
      
     }
   
  }
  
    return (
      <SafeAreaView style={styles.sformcontainer}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView >
          <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            height: 38,
            width: "100%",
            borderColor: "#455a64",
            marginVertical: 3,
            paddingHorizontal: 7,
          //  paddingVertical: 5
          }}
        >
          <Ionicons name="ios-person" size={32} color="#455a64" />
          <TextInput
            style={{ marginLeft: 10, flex: 1 ,height:40,padding:0}}
            autoFocus={true}
            autocorrect={false}
            spellCheck={false}
            minLength={3}
            maxLength={21}
          //  onKeyPress={(e)=>restrict(e)}
            placeholder="Student Name"
            placeholderTextColor="#455a64"
            onChangeText={namevalue}
            clearButtonMode="always"
          />
        </View>
        {nameerror==true?<Text style={{color:'red'}}>Name should atleast 3 char long and alphabets only</Text>:null}
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            style={{ marginLeft: 10, flex: 1,height:40 ,padding:0}}
            
            autocorrect={false}
            spellCheck={false}
            minLength={5}
            maxLength={21}
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
            borderBottomWidth: 1,
            height: 38,
            width: "100%",
            borderColor: "#455a64",
          //  marginVertical: 3,
            paddingHorizontal: 7,
            paddingVertical: 5
          }}
        >
          <Ionicons name="ios-call" size={32} color="#455a64" />
          <TextInput
            style={{ marginLeft: 10, flex: 1 ,height:40 }}
           
            autocorrect={false}
            spellCheck={false}
            keyboardType={'numeric'}
            minLength={11}
            maxLength={11}
            placeholder="Student Phone #"
            placeholderTextColor="#455a64"
            onChangeText={phonevalue}
            clearButtonMode="always"
           
          />
        </View>
        {phoneerror==true?<Text style={{color:'red'}}> Phone # Should be 11 char long</Text>:null}
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            style={{ marginLeft: 10, flex: 1,height:40 }}
            clearButtonMode="always"
            autocorrect={false}
            spellCheck={false}
            placeholder="Student Email"
            keyboardType={'twitter'}
            placeholderTextColor="#455a64"
            onChangeText={mailvalue}
          />
        </View>
        {mailerror==true?<Text style={{color:'red'}}>Enter valid email address</Text>:null}
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
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
            style={{ marginLeft: 10, flex: 1 ,height:40}}
            clearButtonMode="always"
            autocorrect={false}
            spellCheck={false}
            placeholder="Enter Postal address"
            placeholderTextColor="#455a64"
            onChangeText={cityvalue}
          />
        </View>
        {cityerror==true?<Text style={{color:'red'}}>Enter valid home address</Text>:null}
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            height: 38,
            width: "100%",
            borderColor: "#455a64",
            marginVertical: 3,
            paddingHorizontal: 7,
            paddingVertical: 5,
           
          }}
        >
          <Ionicons name="ios-lock" size={32} color="#455a64" />
          <TextInput
          secureTextEntry={showPassword}
            style={{ marginLeft: 10, flex: 1 ,height:40}}
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
        {passerror==true?<Text style={{color:'red'}}>Password should at least 8 char long</Text>:null}
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            height: 38,
            width: "100%",
            borderColor: "#455a64",
            marginVertical: 3,
            paddingHorizontal: 7,
            paddingVertical: 5,
           
          }}
        >
         
          <Ionicons name="ios-lock" size={32} color="#455a64" />
          <TextInput
            secureTextEntry={showPassword2}
            style={{ marginLeft: 10, flex: 1,height:40 }}
            autocorrect={false}
            spellCheck={false}
            placeholder="Re-Password"
            placeholderTextColor="#455a64"
            onChangeText={repassvalue}
          />
           <Switch
            trackColor={{true: 'grey', false: 'red'}}
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
          onValueChange={toggleSwitch2}
          value={showPassword2}
        /> 
        </View>
        <Button onPress={this.signup} text="Sign Up"/>
        

       </KeyboardAvoidingView>
       </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
  
  ;