
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  ActivityIndicator,
  Button,
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MapView, { Polyline } from 'react-native-maps';

// import MapView from 'react-native-maps';
// import Polyline from '@mapbox/polyline';
import Input from '../components/Inputfield';

export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.marker=[],
    this.state = {
      coords: [],
      error:null,
      isLoading:false,
      markers:[]
    }
  }
  
  componentDidMount() {

   if(this.props.category==="mypath")
   {
    this.getCurrentCoordinates();
   
   }
   else{
    this.getCoordinates();
    
  }
  }
 
getCoordinates=()=>{
  marker=[{
    title: 'My Location',
  
   
    coordinates: {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    },
  },
  {
    title: 'Target Location',
  
    coordinates: {
      latitude: this.props.lat,
      longitude: this.props.lang
    },  
  }]
    this.setState({
      markers:marker
    })  
}
getCurrentCoordinates=()=>{
  marker=[{
    title: 'My Location',
    img:require("../Images/mycar.jpg"),
    coordinates: {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    },
  },
  {
    title: 'Target Location',
  img:require("../Images/myhome.jpg"),
    coordinates: {
      latitude: this.props.lat,
      longitude: this.props.lang
    },  
  }]
    this.setState({
      markers:marker
    })  
}

  render() {
   console.log("i want to check eror lat",this.props.lat)
   console.log("i want to check eror lang ",this.props.lang)
   console.log("i want to check eror latitude",this.props.latitude)
   console.log("i want to check eror longitude",this.props.longitude)
    return (
      <View>
         <MapView 
         initialRegion={{
          latitude: this.props.latitude,
          longitude:this.props.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        
         showsUserLocation={this.props.category==="mypath"?true:false}
         followUserLocation={true}
         zoomEnabled={true}
         style={styles.map}>
          
            {this.state.isLoading==true? <ActivityIndicator animating={true} color="red" />:null}


    {this.state.markers.map((marker, index) => {			
    
    return(
     
      <MapView.Marker  key={index} 	
      coordinate={marker.coordinates} 
      title={marker.title}   />
    
      					  )})}

 <Polyline
     coordinates={[
       { latitude: this.props.latitude, longitude: this.props.longitude },
       { latitude: this.props.latitude, longitude: this.props.longitude },
      { latitude: this.props.lat, longitude: this.props.lang },
      { latitude: this.props.lat, longitude: this.props.lang }
    
    ]}
    fillColor="rgba(255,0,0,0.5)"
    strokeColor="red" 
    lineCap="around"
    strokeColors={[
      '#7F0000',
      '#00000000', 
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000'
    ]}
    strokeWidth={4}
   />

      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    left: 30,
    right: 5,
    width: 320,
    height: 320,
    marginBottom:18
   
    
  },
  
});


