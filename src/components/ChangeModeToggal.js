import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [backgroundColor, setbackgroundColor] = useState('white');
  console.log(isEnabled)
  savedata = async () => {
    try {
      await AsyncStorage.removeItem("Background");
     // await AsyncStorage.removeItem("FontColor");
      await AsyncStorage.setItem("Background", backgroundColor);
    //  AsyncStorage.setItem("Password", pass);
    } catch (error) {
      // Error saving data
    }
    try {
      const value = await AsyncStorage.getItem("Background");
      if (value !== null) {
        // We have data!!
        console.log("Session Value", backgroundColor);
      }
    } catch (error) {
      // Error retrieving data
    }
   
  };
  const toggleSwitch = () => 
  {
    setIsEnabled(previousState => !previousState)
    savedata()
    
   if(isEnabled==true)
   {
    setIsEnabled(false)
    setbackgroundColor('white')
    
   }
   else{
    setIsEnabled(true)
    setbackgroundColor('black')
    
   
   }
  };

  return (
    <View style={styles.container}>
      <Switch
       trackColor={{true: 'grey', false: '#2979FF'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  right:10,
  top:13,
  position:'absolute'
   
  
  }
});
