import React,{ useState } from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity,ScrollView,Platform,KeyboardAvoidingView } from 'react-native';
import Logo from '../components/Logo';
import ForgetPassForm from '../components/ForgetpassForm';
import CustomText from '../components/Normaltext';
import BoldText  from '../components/BoldText'
import Links  from '../components/Links'
import {Actions} from 'react-native-router-flux';
import styles from '../Style/Style';
export default function ForgetPassword() {
  const [category, setCategory] = useState("Student");
  signupTeacher=()=>{
    
    Actions.signupT();
  }
  signupStudent=()=>{
    Actions.login();
  }
  invoketeacher=(e)=>{
    
    setCategory(e);
    
  }
  invokestudent=(e)=>{
    
    setCategory(e);
    
  }
    return (
      <View style={styles.logincontainer}> 
       <KeyboardAvoidingView  keyboardVerticalOffset={10}  
          behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
          <ScrollView  
         showsVerticalScrollIndicator={false}
         bounces={true}
         alwaysBounceVertical={true}
         indicatorStyle="black">
        
       
       
         <Logo data={category}/> 
       
       
        <ForgetPassForm tdata={this.invoketeacher} sdata={this.invokestudent}/>
        <View style={styles.containertext}>
          
      
         {/* <Links  text="Back to Login?" onPress={this.signupStudent}/>  */}
        
        </View>
     </ScrollView>
      </KeyboardAvoidingView>
        
      </View>
    );
  }
  
  