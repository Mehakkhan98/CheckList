import * as React from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Actions } from 'react-native-router-flux';

export default function App() {
  return (
    <React.Fragment >
     
      <MenuBar data="Teacher" independent={true}/>  
      
       
    </React.Fragment>
       
    
    
  );
}
