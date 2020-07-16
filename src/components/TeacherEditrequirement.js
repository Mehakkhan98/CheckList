
import React, { Component } from 'react';
import {AsyncStorage, Picker} from 'react-native';
import {Background}from '../Style/Color';
import color from '../Style/Color';
import Timing from '../components/Timing';
import Student_Nature from '../components/Student_Nature';
import Experience from './Teacher_Experience';
import axios from 'axios';
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
import CityPicker from './Picker';
import Class from './Student_Fields';
import Subjects from './Subject';
import PickDocument from './DocumentPicker';
import { Actions } from 'react-native-router-flux';
import CustomButton from './Button'
import { Ionicons } from '@expo/vector-icons';
import Gender from './SelectGender';
import Fee from './FeeRange';
import styles from './style';

//import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          User:'',
          Password:'',
          dataSource:[],
        


        
        
          Flag3:false,
          Flag5:false,
          Info:'',
          Experience:''

      }
  }
    componentDidMount()
   {
     this.getdata()
    }
   
   setExperience=(e)=>{
    this.setState({Experience:e,Flag3:true})
   }
  
  setInfo=(e)=>{
    this.setState({Info:e,Flag5:true})
  }
 

  

   SendComment=()=>{
      alert(this.state.Notification)
    }
   askfortution=()=>{
    
    
     
     
     if(this.state.Flag3==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Experience:this.state.Experience
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTExperience',newTodo)
            
      
     }
    
   
     
     if(this.state.Flag5==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Info:this.state.Info
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTInfo',newTodo)
            
    }
    if(this.state.Flag3==true||this.state.Flag5==true)
    {
      alert("Save Successfully")
    }
     else{
     alert("Server Problem!")
     }
   }
  setNotifiation=(Notification)=>{
    this.setState({Notification})
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
        Teacher_Password:this.state.Password,
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/single_Teacher',newTodo)
            
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
    console.log("Required data is",data.Teacher_Experience)
  return (
 
     <View style={{flex:1,backgroundColor:"#ffff"}} key={i}>
  
       <View style={{marginTop:20}}>
     
  {/* <View  style={styles.description1}>
<Ionicons name="ios-book" size={32} color="black"/>

<TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setExperience} placeholder={data.Teacher_Experience=="Not Define"||""?"Enter your Experience":data.Teacher_Experience} />  

</View>

<View  style={styles.description}>
<Ionicons name="ios-information-circle" size={32} color="black"/>

<TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setInfo} placeholder={data.Teacher_Info=="Not Define"||null?"Info about Teacher":data.Teacher_Info} />  

</View> */}


   <View style={styles.description1}>
     <View style={{flexDirection:'row'}}>
     <Class Id="Teacher"/>
     <Subjects Id="Teacher"/>
     </View>
   
  </View>
  <View style={styles.description1}>
<Fee Id="Teacher"/>
</View>
<View style={styles.description1}>
<Student_Nature Id="Teacher"/>
</View>
<View style={styles.description1}>
<Experience Id="Teacher"/>
</View>
<View style={styles.description1}>
<Timing Id="Teacher"/>
</View>
 
  






<View  style={{ justifyContent: 'center',flexDirection:'row',marginLeft:10}}> 

  
  
</View>
<View style={{ alignItems:'center'}}><TouchableOpacity style={{width:50,marginTop:2}}onPress={this.askfortution} ><Text style={{fontSize:22,color:'red'}}>Save</Text></TouchableOpacity></View>
        
</View>
</View>

               
       
       
         
           
    );
   }) 
  } 
 } 


 