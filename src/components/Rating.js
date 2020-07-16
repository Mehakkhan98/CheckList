import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Rating, AirbnbRating } from 'react-native-ratings'; //5.3.0

export default class App extends Component {
    ratingCompleted=(e)=>{
       console.log(e)
    }
  render() {
    return (
      <View style={styles.container}>
       
      
         <AirbnbRating
        
          showRating={false}
          count={5}
          defaultRating={5}
          onFinishRating={this.ratingCompleted}
          size={20}
        /> 
       
       
     
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // paddingTop: Constants.statusBarHeight,
   // backgroundColor: '#ecf0f1',
  },
  tite: {
    fontSize: 24,
    textAlign: 'center',
    color: '#34495e'
  },
  paragraph: {
    margin: 10,
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});