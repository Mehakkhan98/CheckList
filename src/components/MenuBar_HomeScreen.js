import  React,{Component} from 'react';
import axios from 'axios';
import {Background}from '../Style/Color';
import { Text, View ,TouchableOpacity,Alert} from 'react-native';
import {AsyncStorage} from 'react-native';
import NavBar from '../components/NavBar';
import  data from '../components/pk.json';

import { DrawerActions } from '@react-navigation/routers';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Actions } from 'react-native-router-flux';

export default class StudentHome extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          User:'',
          Password:''

      }
  }
   componentDidMount()
   {
    this.getdata()
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
      alert("Error in session")
    }
  };
   

  render()
  {
    
     
   
    if(this.props.User==="Student")
    {
        return (
            <React.Fragment >
           <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
           <TouchableOpacity style={{}}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              
                <MaterialCommunityIcons name="menu" color='white' size={32} />
               
              </TouchableOpacity>
             
              <Text style={{color:'white',
                       right: 6,
                       marginLeft:170,
                       top: 1,fontSize:18 ,paddingVertical:8,paddingVertical:8}} >{this.state.User}</Text>
               <TouchableOpacity style={{right:2,marginLeft:10,position:'absolute',marginTop:18}} onPress= {()=>Alert.alert(
              
              'Logout Account',
             
              'Do You Want to Logout' ,            
              [
                {text: 'Yes', onPress: ()=> {logout(this.state.User,this.state.Password,this.props.User)}},
                {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
               
              ],
           { cancelable: false })}>
              <MaterialCommunityIcons name="dots-vertical" color='white' size={32} />
                  </TouchableOpacity>
                  
             </View>
             
         <NavBar data="Student" /> 
         </React.Fragment> ); 
    }
    if(this.props.User==="Teacher")
    {
        return (
            <React.Fragment >
           <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
           <TouchableOpacity style={{}}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              
                <MaterialCommunityIcons name="menu" color='white' size={32} />
               
              </TouchableOpacity>
              
             
              <Text style={{color:'white',
                       right: 6,
                       marginLeft:170,
                       top: 1,fontSize:18 ,paddingVertical:8,paddingVertical:8}} >{this.state.User}</Text>
               <TouchableOpacity style={{right:2,marginLeft:10,position:'absolute',marginTop:18}}onPress= {()=>Alert.alert(
              
              'Logout Account',
             
              'Do You Want to Logout' ,            
              [
                {text: 'Yes', onPress: ()=> {logout(this.state.User,this.state.Password,this.props.User)}},
                {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
               
              ],
           { cancelable: false })}>
               <MaterialCommunityIcons name="dots-vertical" color='white' size={32} />
                  </TouchableOpacity>
                 
             </View>
             
         <NavBar data="Teacher" /> 
         </React.Fragment> ); 
    
    }
         
      }
      
 
 
}
