
import React, { Component } from 'react';
import {AsyncStorage, Picker} from 'react-native';
import {Background}from '../Style/Color';
import color from '../Style/Color';
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
import Subjects from './Student_Fields';
import PickDocument from './DocumentPicker';
import { Actions } from 'react-native-router-flux';
import CustomButton from './Button'
import { Ionicons } from '@expo/vector-icons';
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
         

      }
  }
    componentDidMount()
   {
     this.getdata()
    }
  
  
  

  

   
   askfortution=()=>{
    
    alert("Save Successfully")
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
  
        <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
       
</View>

<View style={{marginTop:20}}>
{/* <View  style={styles.description}>

<PickDocument text="Upload Cnic"/>
</View> */}
<View  style={styles.description2}>
<PickDocument text="Upload Updated Cv"/>
</View>

<View  style={styles.description2}>

<PickDocument text="Upload Cover Letter"/>
</View>
<View  style={styles.description2}>


<PickDocument text="Upload Recent Degree"/>
</View>

<View  style={styles.description2}>
<PickDocument text="Upload  Experience Letter"/>
</View>


</View>

<View  style={{ justifyContent: 'center',flexDirection:'row',marginLeft:10}}> 



  
  
  
</View>
<View style={{ alignItems:'center',marginTop:35,}}><TouchableOpacity style={{width:50,marginTop:20}}onPress={this.askfortution} ><Text style={{fontSize:22,color:'red'}}>Save</Text></TouchableOpacity></View>
        
       
</View>

               
       
       
         
           
    );
   }) 
  } 
 } 



