import React,{Component,useState} from 'react';
import axios from 'axios';
import { Text, View, TouchableOpacity ,Slider,ScrollView,Switch,StyleSheet} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Notifications from './NotificationScreen';
import Badge from './Badge';
import { getDistance, getPreciseDistance } from 'geolib';
import { Ionicons } from "@expo/vector-icons";

export default function App(props){
   
        const [isEnabled, setIsEnabled] = useState(true);
     
        const toggleSwitch = () => 
        {
           
          setIsEnabled(previousState => !previousState)
         
          
         if(isEnabled==true)
         {
          setIsEnabled(false)
        
          
         }
         else{
          setIsEnabled(true)
         
          
         
         }
        };

    if(props.client==="Student")
    {
   return(
<View>
<ScrollView style={{flex:1}}contentContainerStyle={{ flexGrow: 1 }}>
<View style={styles.container}>
 
<Switch
       trackColor={{true: 'grey', false: '#2979FF'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{marginTop:30}}>
      <Notifications client="Student" category={isEnabled}/>
      </View>
    
      </ScrollView>
</View>
   )
    }
   else{
    return(
        <View>
        <ScrollView style={{flex:1}}contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
        <Switch
       trackColor={{true: 'grey', false: '#2979FF'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{marginTop:30}}>
      <Notifications client="Teacher" category={isEnabled}/>
      </View>
              
              </ScrollView>
        </View>
           )
   }
 
  }  
  const styles = StyleSheet.create({
    container: {
    right:10,
    top:13,
    marginBottom:30,
    position:'absolute'
     
    
    }
  });
  