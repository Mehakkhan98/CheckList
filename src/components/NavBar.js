import React, { Component } from 'react'
import axios from 'axios';
import {Background}from '../Style/Color';
import { Text, View, Platform,ScrollView ,Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Colors, Badge } from 'react-native-paper';
import Notifications from './Notifications';
import Render from './RenderHomeData';
import SearchNeeds from './Searchbar';
import Favourit from './Favourite';
import MyMap from './MapView';
import Batch from './Badge';
import Teachers_Notifications from '../components/NotificationScreen';
import NavigationBar from 'react-native-navbar-color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Actions } from 'react-native-router-flux';
export default class NavBar extends Component {
  
 
  componentDidMount() {
   {Platform.OS=='ios'?NavigationBar.setStatusBarTheme('dark',true):NavigationBar.setStatusBarTheme('light',true)} ;
    
}
  render()
 
  {
    
    const data=this.props.data
    
    return (
      <NavigationContainer independent={true}>
        <MyTabs data1={data}/>
      </NavigationContainer>
    );
  }
 
}



function Teacher_Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white'}}>
      <Render data="Student"/>
    </View>
  );
}
function Teacher_Search() {
  return (
    <View style={{flex: 1,backgroundColor:'white' }}>
    <SearchNeeds data="Teacher"/>
    </View>
  );
}



function Teacher_Notifications() {
  return (
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
      
       <Notifications client="Teacher"/>
     
    
    </View>
  );
}




function Student_Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
     <Render data="Teacher"/>
    </View>
  );
}
function Student_Search() {
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
     <SearchNeeds data="Student"/>
  
   </View>
  );
}



function Student_Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
   
     <Notifications client="Student"/>
    
     
     
   
   </View>
  );
}


function Student_Favourite() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
     <Favourit data="Teacher"/> 
   </View>
  );
}
function Teachers_Favourite() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
   <Favourit data="Student"/> 
   </View>
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
          component={Student_Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
           
           
          }}
        />
        <Tab.Screen
          name="Search"
          component={Student_Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-search" color={color} size={28} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Student_Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <View style={{flexDirection:'row'}}>
                <Batch/>
                <MaterialCommunityIcons name="bell" color={color} size={28} />
              </View>
              
              
              
            ),
           
          }}
        />
      
          <Tab.Screen
          name="Favourite"
          component={Student_Favourite}
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={28} />
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
        initialRouteName="Feed"
        activeColor="red"
        labelStyle={{ fontSize: 14 }}
        barStyle={{ backgroundColor: Background }}
      
       
      >
        <Tab.Screen
          name="Feed"
          component={Teacher_Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
           
           
          }}
        />
        <Tab.Screen
          name="Search"
          component={Teacher_Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-search" color={color} size={28} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Teacher_Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <View style={{flexDirection:'row'}}>
                 <Batch/>
              <MaterialCommunityIcons name="bell" color={color} size={28} />
              </View>
             
            ),
           
          }}
        />
       
         <Tab.Screen
          name="Favourite"
          component={Teachers_Favourite}
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={28} />
            ),
            
            
            
          }}
        />
        
      </Tab.Navigator>
    );
  }
  
}

