import  React,{Component} from 'react';
import axios from 'axios';
import { Text, View ,TouchableOpacity,Alert} from 'react-native';
import {AsyncStorage} from 'react-native';
import NavBar from '../components/NavBar';
 import MenuBar from '../components/MenuBar';
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
      if (value !== null) {
        this.setState({Password:value1})
       
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render()
  {
  return (
      <React.Fragment >
      <MenuBar data="Student" independent={true} user={this.state.User} />  
      </React.Fragment>
    );
  }
 
}
