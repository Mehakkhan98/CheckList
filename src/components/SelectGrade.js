import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
          User:'',
          Password:'',
          dataSource:[],
      firstLanguage: 'A+'
     
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
    }
    

  

  };

  
  render() {
  
    return (
     
      <View style={styles.container}>
       
        
        <Text style={styles.title}>Select Your Recent Grade:</Text>
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.firstLanguage}
           onValueChange={(itemValue) => {
            this.setState({firstLanguage: itemValue})
            const newTodo = {
              User_Name:this.state.User,
              Student_Password:this.state.Password,
              Student_Lastgrades:itemValue
            };
      
            let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateSGrade',newTodo)
          }}
         // onValueChange={this.setdata}
        >
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="C+" value="C+" />
          <Picker.Item label="C" value="C" />
          <Picker.Item label="Fail" value="Fail" />
        
        </Picker>
      
      </View>
      
    );
    
   
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
   // backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 20,
    // marginBottom: 10,
  },
  picker: {
    width: 200,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerView:{
    height:400,    
  },
  pickerItem: {
    color: 'red'
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: 'red'
  },
  twoPickers: {
    width: 200,
    height: 88,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  twoPickerItems: {
    height: 88,
    color: 'red'
  },
});
