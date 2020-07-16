import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity, KeyboardAvoidingView ,Platform,ScrollView} from 'react-native';
import Logo from '../components/Logo';
import Signupform from '../components/StudentRegister';
import Links  from '../components/Links'
import CustomText from '../components/Normaltext';
import {Actions} from 'react-native-router-flux';
import styles from '../Style/Style';
export default function SignupT() {
  login=()=>{
    Actions.login();
  }
    return (
      <View style={styles.signupcontainer}>
         <KeyboardAvoidingView  keyboardVerticalOffset={10}  
          behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
         <ScrollView  style={{flex:1}} contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
         bounces={true}
         alwaysBounceVertical={true}
         indicatorStyle="black">
       
        <Logo/>
       
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
  
  