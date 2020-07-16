
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
        
         



      }
  }
    componentDidMount()
   {
     this.getdata()
    }
    
  
   
   save=()=>{
  
    
  
      alert("Save Successfully")
    
     
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
  if(this.state.dataSource==null)
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
      <ActivityIndicator animating={true} color="#0c95b2" size={48}/>
      <Text>Server is OFF </Text>
     
    </View>
      
    )
  }
  return  this.state.dataSource.map((data,i) => {
  return (
 
    <View style={{flex:1,backgroundColor:"#ffff"}} key={i}>
       <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
       
       </View>
      <View style={{marginTop:20}}>
        <View  style={styles.description}>
<PickDocument text="Upload  Cnic or B-form"/>
</View>

<View  style={styles.description}>
<PickDocument text="Upload  Recent Result"/>
</View>



<View  style={{ justifyContent: 'center',flexDirection:'row',marginLeft:10}}> 



</View>
  
  
</View>


              
       
<View style={{ alignItems:'center'}}><TouchableOpacity style={{width:50,marginTop:2,bottom:0}}onPress={this.save} ><Text style={{fontSize:22,color:'red'}}>Save</Text></TouchableOpacity></View>
    
       
        </View>  
            
     
    );
   }) 
 }
}



