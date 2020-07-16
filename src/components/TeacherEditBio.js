
import React, { Component } from 'react';
import {AsyncStorage, Picker} from 'react-native';
import {Background}from '../Style/Color';
import color from '../Style/Color';
import axios from 'axios';
import { ActivityIndicator, Colors } from 'react-native-paper';
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
          Notification:'',
          name:'',


          mail:'',
          Flag1:false,
          phone:'',
          Flag2:false,
         Specification:'',
          Flag3:false,
          Name:'',
          Flag4:false,
          address:'',
          Flag5:false,
          Fee:'',
          Flag6:false,
          Info:'',
          Flag7:false,
          Experience:''

      }
  }
    componentDidMount()
   {
     this.getdata()
    }
   setName=(e)=>{
      this.setState({Name:e,Flag1:true})
   }
   setmail=(e)=>{
    this.setState({mail:e,Flag2:true})
   }
   setphone=(e)=>{
    this.setState({phone:e,Flag8:true})
   }
   
  setaddress=(e)=>{
    this.setState({address:e,Flag6:true})
  }
  setspecification=(e)=>{
    this.setState({Specification:e,Flag7:true})
  }

  

   SendComment=()=>{
      alert(this.state.Notification)
    }
   askfortution=()=>{
    
    if(this.state.Flag2==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Email:this.state.mail
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTEmail',newTodo)
            
            
    
     }
     if(this.state.Flag8==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Phone:this.state.phone
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTPhone',newTodo)
    }
      if(this.state.Flag7==true)
      {
       const newTodo = {
         User_Name:this.state.User,
         Teacher_Password:this.state.Password,
         Teacher_Qualification:this.state.Specification
       };
 
       let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTQualification',newTodo)
             
      
      
      
     }
    
     if(this.state.Flag1==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Name:this.state.Name
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTName',newTodo)
            
      
      
     }
     if(this.state.Flag6==true)
     {
      const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        Teacher_Adress:this.state.address
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/updateTaddress',newTodo)
            
      
      
     }
     
    if(this.state.Flag1==true||this.state.Flag2==true||this.state.Flag6==true||this.state.Flag7==true||this.state.Flag8==true)
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
  
  
 
  if(this.state.dataSource.length===0)
  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
      <ActivityIndicator animating={true} color="#0c95b2" size={48}/>
      <Text>Server is OFF </Text>
     
    </View>
      
    )
  }
  return  this.state.dataSource.map((data,i) => {
    console.log("Required data is",data.Teacher_Experience)
  return (
 
     <View style={{flex:1,backgroundColor:"#ffff"}} key={i}>
  
  <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
        <TouchableOpacity onPress={()=> Actions.T_home()}>
        <Ionicons name="ios-arrow-back" size={32} color="white"/>
        </TouchableOpacity>

        </View>
 
       
         
      
         <View style={styles.body}> 
             <View style={styles.bodyContent}> 
       
       <TextInput style={styles.name1}  placeholderTextColor="#455a64" onChangeText={this.setName} placeholder={data.Teacher_Name} />
       
       <TextInput style={styles.info}  placeholderTextColor="#455a64" onChangeText={this.setspecification} placeholder={data.Teacher_Qualification=="Not Define"||null?"Enter Your Specifications": data.Teacher_Qualification
}/>

</View> 
 </View> 
 
<View  style={styles.borderline}>
</View>

<View  style={styles.container}>
<View  style={styles.description}>


<Ionicons name="ios-mail" size={32} color="black"/>

<TextInput   style={styles.name1} placeholderTextColor="#455a64" onChangeText={this.setmail}  placeholder={data.Teacher_Email=="Not Define"||null?"Enter Email address":data.Teacher_Email}  /> 

</View>
<View  style={styles.description}>

<Ionicons name="ios-call" size={32} color="black"/>

<TextInput   style={styles.name1}  placeholderTextColor="#455a64" onChangeText={this.setphone} placeholder={data.Teacher_Phone=="Not Define"||null?"Enter Phone#":data.Teacher_Phone}  />   

</View>
<View  style={styles.description}>
<Ionicons name="ios-home" size={32} color="black"/>

<TextInput   style={styles.name1}  placeholderTextColor="#455a64" onChangeText={this.setaddress} placeholder={data.Teacher_Adress=="Not Define"||null?"Enter Home address":data.Teacher_Adress} />  

</View>

<View style={styles.description1}>
<Gender Id="Teacher"/>
</View>
 
  <View style={styles.description1} >
  <CityPicker Id="Teacher"/>
  </View> 


  
  
  


        
       
        <View style={{ alignItems:'center'}}><TouchableOpacity style={{width:50,marginTop:2}}onPress={this.askfortution} ><Text style={{fontSize:22,color:'red'}}>Save</Text></TouchableOpacity></View>
        
       
       </View>  
            </View>
     
    );
   }) 
  } 
 } 



