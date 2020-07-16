import React, { Component } from 'react'
import axios from 'axios';
import {Background}from '../Style/Color';
import { Text, View ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Render from './RenderHomeData';
import SearchNeeds from './Searchbar';
import { Ionicons } from '@expo/vector-icons';
import Screen1 from './TeacherEditBio';
import Screen2 from './TeacherEditrequirement';
import Screen3 from '../components/TeachereditDocument';
import Screen4 from '../components/EditStudentBio';
import Screen5 from '../components/EditStudentneed';
import Screen6 from '../components/EditStudentDocument';
import MyMap from './MapView';
import Teachers_Notifications from '../components/NotificationScreen';
import NavigationBar from 'react-native-navbar-color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Actions } from 'react-native-router-flux';


function Teacher_Bio() {
  return (
    <Screen1/>
  )
}

function Teacher_Requirements() {
    return (
       <Screen2/>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
    //   </View>
      );
}


function Teacher_Documents() {
    return (
       <Screen3/>
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
    //   </View>
      );
}



function Student_Bio() {
  return (
    <Screen4/>
  );
}

function Student_Requirements() {
    return (
        <Screen5/>
      );
}
function Student_Documents() {
    return (
      <Screen6/>
      );
}


const Tab = createMaterialBottomTabNavigator();

function MyTabs(props) {
  console.log("Reached Successfully!",props.data1)
  if(props.data1=="Student")
  {
    return (
   
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="red"
        labelStyle={{ fontSize: 14 }}
        barStyle={{ backgroundColor: Background }}
      
       
      >
        <Tab.Screen
          name="Feed"
          component={Student_Bio}
          options={{
            tabBarLabel: 'Bio',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
           
           
          }}
        />
       
        
        <Tab.Screen
          name="Requirement"
          component={Student_Requirements}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="diamond" color={color} size={28} />
            ),
            
            
            
          }}
        />
         <Tab.Screen
          name="Document"
          component={Student_Documents}
          options={{
            tabBarLabel: 'Documents',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cloud-upload" color={color} size={28} />
            ),
            
            
            
          }}
        />
      </Tab.Navigator>
    );
  }
  if(props.data1=="Teacher")
  {
    return (
   
      <Tab.Navigator
        initialRouteName="Bio"
        activeColor="red"
        labelStyle={{ fontSize: 14 }}
        barStyle={{ backgroundColor: Background }}
      
       
      >
        <Tab.Screen
          name="Bio"
          component={Teacher_Bio}
          options={{
            tabBarLabel: 'Bio',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
           
           
          }}
        />
       
       
        <Tab.Screen
          name="Requirements"
          component={Teacher_Requirements}
          options={{
            tabBarLabel: 'Requirements',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="diamond" color={color} size={28} />
            ),
            
            
            
          }}
        />
        <Tab.Screen
          name="Documents"
          component={Teacher_Documents}
          options={{
            tabBarLabel: 'Documents',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cloud-upload" color={color} size={28} />
            ),
            
            
            
          }}
        />
      </Tab.Navigator>
    );
  }
  
}

export default class NavBar extends Component {
  
  componentDidMount() {
    NavigationBar.setStatusBarTheme('dark',true);
    
}
  render()
 
  {
    console.log(this.props.data)
    const data=this.props.data
    console.log("Working girl",data)
    return (
      <NavigationContainer independent={true}>
        <MyTabs data1={data}/>
      </NavigationContainer>
    );
  }
 
}
