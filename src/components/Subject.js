
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
      firstLanguage: '',
     
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
    

        if(this.props.Id=="Teacher")
        {
          return (
            <View style={styles.container}>
             
              
              <Text style={styles.title}>Subject:</Text>
              <Picker
                style={styles.onePicker} itemStyle={styles.onePickerItem}
                selectedValue={this.state.firstLanguage}
                 onValueChange={(itemValue) => {
                  this.setState({firstLanguage: itemValue})
                  const newTodo = {
                    User_Name:this.state.User,
                    Teacher_Password:this.state.Password,
                    Desired_Subjects:itemValue
                  };
            
                  let response = axios.post('http://192.168.8.100:4000/online_tutor_db/update_T_DesiredSubjects',newTodo)
                }}
              >
                   <Picker.Item label="Quran Majeed" value="Quran Majeed" />
                 <Picker.Item label="Math" value="Math" />
              <Picker.Item label="Physics" value="Physics" />
              <Picker.Item label="Chemistry" value="Chemistry" />
              <Picker.Item label="Biology" value="Biology" />
               <Picker.Item label="Arts" value="Arts" />
               <Picker.Item label="Computer" value="Computer" />
               <Picker.Item label="Pak Study" value="Pak Study" />
               <Picker.Item label="Urdu" value="Urdu" />
               <Picker.Item label="History" value="History" />
               <Picker.Item label="All" value="All" />
                  <Picker.Item label="Others" value="Others" />
                  
           
        
       
              </Picker>
             
            </View>
          );
        }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    marginTop:10
   // backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginTop: 20,
    // marginBottom: 10,
  },
  picker: {
    width: 150,
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
    width: 150,
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
