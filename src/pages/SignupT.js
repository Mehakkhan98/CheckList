import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity,KeyboardAvoidingView ,Platform,ScrollView } from 'react-native';
import Logo from '../components/Logo';
import Signupform from '../components/TeacherRegistration';
import Links  from '../components/Links';
import styles from '../Style/Style';
import CustomText from '../components/Normaltext';
import {Actions} from 'react-native-router-flux';

export default function SignupT() {
  login=()=>{
    Actions.login();
  }
    return (
    
      <View style={styles.signupcontainer}>
        <KeyboardAvoidingView  keyboardVerticalOffset={10}   behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
        <ScrollView  style={{flex:1}}contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
         bounces={true}
         alwaysBounceVertical={true}
         indicatorStyle="black">
      
        
      
          <Logo data={"Teacher"}/>  
        <Signupform/>
       
        <View style={styles.signupcontainertext}>
            <CustomText style={styles.signuptext} text="Already have account ?"/>
            
         
           <Links onPress={this.login} text="Sign In!"/>
          
        </View>
        
       
        
        </ScrollView>
        </KeyboardAvoidingView>
      </View>
    
     
    );
  }
  
 