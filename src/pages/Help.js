import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import {Background}from '../Style/Color';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import Styles from "../Style/Style";
import ImageSlider from '../components/ImageSlider';
import {AsyncStorage} from 'react-native';
import email from 'react-native-email';
import axios from 'axios';
export default class App extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={
         
         input:"",
        Subject:"",
       
      }
  }
  
  
   unamevalue = value => {
      this.setState({input:value})
  };
  subject=value=>{
    this.setState({Subject:value})
  }
  handleEmail = () => {
    const to = ['mehakiftikhar1998@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: "",
        bcc: "",
        subject: this.state.Subject,
        body: this.state.input
    }).catch(console.error)
}

  render() {
    return (
     
       
      <View style={styles.container}>
        
        <KeyboardAvoidingView  keyboardVerticalOffset={10}   behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
        <ScrollView  style={{flex:1}}contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
         bounces={true}
         alwaysBounceVertical={true}
         indicatorStyle="black">
      
              <ImageSlider/>
             
          <Paragraph>Every upcoming technology is beneficial , 
            if you use them for proper reason,online tutor finding system 
            is designed to facilitate you, it can find  the best teacher or Student for you ,
            it can provide Job to many litrate jobless people,it can provide you the desired 
            teacher with reasonable fee and timings,We will find according to your need and 
            Provide it you but next Complete authentication is your own responsibility(originality of certificates,
            Confirmance of Address , interview),if you are
             facing any problem regarding System or any user you can contact us via Email,we are always here to fecilitate you....Thank You.
          </Paragraph>
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
            clearButtonMode="always"
            spellCheck={false}
            placeholder="Subject of Email"
            placeholderTextColor="#455a64"
            onChangeText={this.subject}
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
          <Ionicons name="ios-mail" size={32} color="#455a64" />
          <TextInput
            style={{ marginLeft: 10, flex: 1 }}
            autoFocus={true}
            autocorrect={false}
            clearButtonMode="always"
            spellCheck={false}
            placeholder="Send Message via Email"
            placeholderTextColor="#455a64"
            onChangeText={this.unamevalue}
           
           
          />
        </View>
        <TouchableOpacity
      style={Styles.buttonStyle2}
      onPress={this.handleEmail}
      >
      <Text style={Styles.buttontext}>Send</Text>
    </TouchableOpacity>

          </ScrollView>
          </KeyboardAvoidingView>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    // marginLeft:10,
    // width:'95%',
    // height:'95%'

  },
  
});