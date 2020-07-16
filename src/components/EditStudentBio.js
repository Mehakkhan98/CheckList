
import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import color from '../Style/Color';
import axios from 'axios';
import Student_Nature from '../components/Student_Nature';
import Gender from '../components/SelectGender';
import Fee from '../components/FeeRange';
import Grade from '../components/SelectGrade';
import {Background}from '../Style/Color';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  FlatList
} from 'react-native';
import Subjects from '../components/Student_Fields';
import Link from '../components/Links';
import { Paragraph } from 'react-native-paper';
import CityPicker from '../components/Picker';
import PickDocument from '../components/DocumentPicker';
import { Actions } from 'react-native-router-flux';
import CustomButton from '../components/Button'
import { Ionicons } from '@expo/vector-icons';

import styles from '../components/style';
//import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          User:'',
          Password:'',
          dataSource:[],
          Notification:'',
          name:'',

          mail:'',
          Flag1:false,
          phone:'',
          Flag2:false,
          Class:'',
          Flag3:false,
          Name:'',
          Flag4:false,
          address:'',
          Flag5:false,
          Info:'',
          Flag7:false,
         



      }
  }
    componentDidMount()
   {
     this.getdata()
    }
    
  
   SendComment=()=>{
      alert(this.state.Notification)
    }
   askfortution=()=>{
     if(this.state.Flag1==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Email:this.state.mail
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSEmail',newTodo)
            
            
    
     }
     if(this.state.Flag2==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Phone:this.state.phone
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSPhone',newTodo)
            
            
      
      
      
     }
     if(this.state.Flag3==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Class:this.state.Class
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSClass',newTodo)
            
      
     }
     if(this.state.Flag4==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Name:this.state.Name
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSName',newTodo)
            
      
      
     }
     if(this.state.Flag5==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Adress:this.state.address
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSaddress',newTodo)
            
      
      
     }
     
     if(this.state.Flag7==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        Student_Info:this.state.Info
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateSInfo',newTodo)
            
    }
    
    if(this.state.Flag1==true||this.state.Flag2==true||this.state.Flag3==true||this.state.Flag4==true||this.state.Flag5==true||this.state.Flag7==true)
    {
      alert("Save Successfully")
    }
     else{
     alert("Server Problem!")
     }
   }
   setmail=(e)=>{
     this.setState({mail:e,Flag1:true})
   }
   setPhone=(e)=>{
     this.setState({phone:e,Flag2:true})
    
   }
   setClass=(e)=>{
     this.setState({Class:e,Flag3:true})
   }
   setName=(e)=>{
    this.setState({Name:e,Flag4:true})
   }
   setadress=(e)=>{
    this.setState({address:e,Flag5:true})
   }
   
   setInfo=(e)=>{
    this.setState({Info:e,Flag7:true})
   }
  
  
  
   getdata= async () => {
     try {
       const value = await AsyncStorage.getItem('User_Name');
       if (value !== null) {
         // We have data!!
         this.setState({User:value})
        
       
       }
     } catch (error) {
       alert("Error in session")
     }
     try {
       const value1 = await AsyncStorage.getItem('Password');
       if (value1 !== null) {
         this.setState({Password:value1})
         
       
       }
     } catch (error) {
       // Error retrieving data    
     }
     const newTodo = {
        User_Name:this.state.User,
        Student_Password:this.state.Password,
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/single_Student',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                        dataSource:person
      
      
      

                    })
                    })

   };


  render()
 {
 
  return  this.state.dataSource.map((data,i) => {
  return (
 
     <View style={{flex:1,backgroundColor:"#ffff"}} key={i}>
  
         {/* <View style={styles.header}> */}
         <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
        <TouchableOpacity onPress={()=> Actions.S_home()}>
        <Ionicons name="ios-arrow-back" size={32} color="white"/>
        </TouchableOpacity>

        </View>
 
       
      
         <View style={styles.body}> 
             <View style={styles.bodyContent}> 
       
       <TextInput style={styles.name1} onChangeText={this.setName} placeholderTextColor="#455a64" placeholder={data.Student_Name} />
       
       <TextInput style={styles.info} onChangeText={this.setClass} placeholderTextColor="#455a64" placeholder={data.Student_Class=="Not Define"||null?"Enter your Class and Subjects": data.Student_Class
}/>

</View> 
 </View> 
 
<View  style={styles.borderline}>
</View>


<View  style={styles.container}>
<View  style={styles.description}>

<Ionicons name="ios-mail" size={32} color="black"/>

<TextInput   style={styles.name1} placeholderTextColor="#455a64" onChangeText={this.setmail}  placeholder={data.Student_Email=="Not Define"||null?"Enter Email address":data.Student_Email}  /> 

</View>
<View  style={styles.description}>

<Ionicons name="ios-call" size={32} color="black"/>

<TextInput   style={styles.name1} onChangeText={this.setPhone} placeholderTextColor="#455a64" placeholder={data.Student_Phone=="Not Define"||null?"Enter Phone#":data.Student_Phone}  />   

</View>
<View  style={styles.description}>
<Ionicons name="ios-home" size={32} color="black"/>

<TextInput   style={styles.name1} onChangeText={this.setadress} placeholderTextColor="#455a64" placeholder={data.Student_Adress=="Not Define"||null?"Enter Home address":data.Student_Adress} />  

</View>

<View style={styles.description1}>
  <CityPicker Id="Student"/>
  </View>
  <View style={styles.description1}>
  <Gender Id="Student"/>
  </View>
 



      

              
       
        <View style={{ alignItems:'center'}}><TouchableOpacity style={{width:50,marginTop:2}}onPress={this.askfortution} ><Text style={{fontSize:22,color:'red'}}>Save</Text></TouchableOpacity></View>
        
       
       
        </View> 
        </View> 
            
     
    );
   }) 
 }
}



