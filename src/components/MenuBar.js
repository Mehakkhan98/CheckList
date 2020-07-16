import  React ,{ useState } from 'react';
import { View, Text, Button ,TouchableOpacity,Image, Dimensions,Alert,icon,Icon} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import NavBar from '../components/NavBar';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import MenuBar_Home from './MenuBar_HomeScreen';
import Deleteaccount from './DeleteAccount';
import EditProfile from '../pages/EditProfile';
import EditTeacherProfile from '../pages/EditTeacherProfile';
import ImagePicker from './PickImage';
import * as Sharing from 'expo-sharing';
import { NavigationContainer } from '@react-navigation/native';
import Help from '../pages/Help';
import { Ionicons } from '@expo/vector-icons';
import {Actions} from 'react-native-router-flux';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
  
 
 
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/routers';

 
var width = Dimensions.get('window').width;
logout=async (u,p,client)=>{
 
  
  if(client==="Student")
  {
    const newTodo = {
      User_Name:u,
      Password:p,
     
    };
    
   
    axios.post('http://192.168.8.101:4000/online_tutor_db/LogoutStudent', newTodo)
      .then(
        () =>
          Alert.alert(
            "Logout",

            "Logout Successfully",
            [{ text: "OK", onPress: () => Actions.login() }],
            { cancelable: false }
          ),
      
      )

      .catch(() =>
        Alert.alert(
          "warning!",

          "Server is Off                                     Check your Server?",
          [
            
            { text: "Ok", onPress: () => console.log(), style: "cancel" }
          ],
          { cancelable: false }
        )
      );
   }
 

  if(client==="Teacher")
  {
    const newTodo = {
      User_Name:u,
      Password:p,
      
    };

    axios.post('http://192.168.8.101:4000/online_tutor_db/LogoutTeacher', newTodo)
    .then(
      () =>
        Alert.alert(
          "Logout",

          "Logout Successfully",
          [{ text: "OK", onPress: () => Actions.login() }],
          { cancelable: false }
        ),
    
    )

    .catch(() =>
      Alert.alert(
        "Warning!",

        "Server is Off                                     Check your Server?",
        [
          
          { text: "Ok", onPress: () => console.log(), style: "cancel" }
        ],
        { cancelable: false }
      )
    );
  }
}


 function Student_Notifications() {
  return (
    <EditProfile/>
  );
}

function Student_AccountDelete() {
  return (
    <View style={{ flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: '#ffff' }}>
     <Deleteaccount client="Student"/>
    </View>
  );
}
function Student_Feed({ navigation }) {
  return (
    <React.Fragment>
     <MenuBar_Home navigation={navigation} User="Student"/>
   </React.Fragment>
  );
} 
function Teacher_Feed({ navigation }) {
  return (
    <React.Fragment>
     <MenuBar_Home navigation={navigation} User="Teacher"/>
   </React.Fragment>
   
  );
}


function Teacher_Notifications() {
  return (
    <EditTeacherProfile/>
  );
}
function Teacher_Help() {
 return(
  
   <Help/>
 )
}
function Student_Help() {
  return(
   
    <Help/>
  )
}
function Teacher_AccountDelete() {
  return (
    <View style={{ flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: '#ffff' }}>
     <Deleteaccount client="Teacher"/>
    </View>
  );
}

function CustomDrawerContent_Student(props) {
 
  return (
    <React.Fragment>
    
  <ImagePicker data="Student"/>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     
       
      {/* <DrawerItem
      label="close"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      /> */}
      
      
     
     
    </DrawerContentScrollView>
    </React.Fragment>
  );
}


function CustomDrawerContent_Teacher(props) {
 
  return (
    <React.Fragment>
    <ImagePicker data="Teacher"/>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     
     
      
      {/* <DrawerItem
      label="close"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      /> */}
      
      
    </DrawerContentScrollView>
    </React.Fragment>
  );
}

 const Drawer = createDrawerNavigator()


function MyDrawer(props) {
if(props.data=="Student")
{
  return (
    
    
    <Drawer.Navigator drawerContent={props => CustomDrawerContent_Student(props)}>
     
      <Drawer.Screen
     
       name="Feed" 
       component={Student_Feed}
      />
      <Drawer.Screen 
      name="Settings"
       component={Student_Notifications} />

       <Drawer.Screen 
      name="Delete account"
      component={Student_AccountDelete} />
     <Drawer.Screen
     
       name="Help" 
       component={Student_Help}
      />
    </Drawer.Navigator>
    
  );
}
if(props.data=="Teacher")
{
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent_Teacher(props)}>
      <Drawer.Screen 
      name="Feed"
       component={Teacher_Feed}
        />
      <Drawer.Screen 
      name="Settings"
      component={Teacher_Notifications} />


       <Drawer.Screen 
      name="Delete account"
      component={Teacher_AccountDelete} />
      <Drawer.Screen 
      name="Help"
      component={Teacher_Help} />
    </Drawer.Navigator>
    
  );
}
 
}

export default function MenuBar(props) {
 
  return (
   
    <NavigationContainer >
      <MyDrawer data={props.data} user={props.user} />
    </NavigationContainer>
  );
}
