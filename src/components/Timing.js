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
      firstLanguage: '8:am',
      seconedLanguage:'9:am'
     
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
       
        <View style={{flexDirection:'row'}}>
            <View style={{marginHorizontal:5}}>
        <Text style={styles.title}>Start Time:</Text>
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.firstLanguage}
           onValueChange={(itemValue) => {
            this.setState({firstLanguage: itemValue})
            const newTodo = {
              User_Name:this.state.User,
              Student_Password:this.state.Password,
              Tuttion_Start_Time:itemValue
            };
      
            let response = axios.post('http://192.168.8.101:4000/online_tutor_db/update_s_Tuttionstarttime',newTodo)
          }}
         // onValueChange={this.setdata}
        >
          <Picker.Item label="9:00 am" value="9:00 am" />
          <Picker.Item label="10:00 am" value="10:00 am" />
          <Picker.Item label="11:00 am" value="11:00 am" />
          <Picker.Item label="12:00 pm" value="12:00 pm" />
          <Picker.Item label="1:00 pm" value="1:00 pm" />
          <Picker.Item label="2:00 pm" value="2:00 pm" />
          <Picker.Item label="3:00 pm" value="3:00 pm" />
          <Picker.Item label="4:00 pm" value="4:00 pm" /> 
          <Picker.Item label="5:00 pm" value="5:00 pm" /> 
          <Picker.Item label="6:00 pm" value="6:00 pm" />
          <Picker.Item label="7:00 pm" value="7:00 pm" />
          <Picker.Item label="8:00 pm" value="8:00 pm" />
        </Picker>
        </View>
        <View>
        <Text style={styles.title}>End Time:</Text>
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.seconedLanguage}
           onValueChange={(itemValue) => {
            this.setState({seconedLanguage: itemValue})
            const newTodo = {
              User_Name:this.state.User,
              Student_Password:this.state.Password,
              Tuttion_End_Time:itemValue
            };
      
            let response = axios.post('http://192.168.8.101:4000/online_tutor_db/update_s_Tuttionsendtime',newTodo)
          }}
         // onValueChange={this.setdata}
        >
          <Picker.Item label="9:00 am" value="9:00 am" />
          <Picker.Item label="10:00 am" value="10:00 am" />
          <Picker.Item label="11:00 am" value="11:00 am" />
          <Picker.Item label="12:00 pm" value="12:00 pm" />
          <Picker.Item label="1:00 pm" value="1:00 pm" />
          <Picker.Item label="2:00 pm" value="2:00 pm" />
          <Picker.Item label="3:00 pm" value="3:00 pm" />
          <Picker.Item label="4:00 pm" value="4:00 pm" /> 
          <Picker.Item label="5:00 pm" value="5:00 pm" /> 
          <Picker.Item label="6:00 pm" value="6:00 pm" />
          <Picker.Item label="7:00 pm" value="7:00 pm" />
          <Picker.Item label="8:00 pm" value="8:00 pm" />
        </Picker>
        </View>
      </View>
      </View>
    );
  }
    if(this.props.Id=="Student")
    {
      return (
     
        <View style={styles.container}>
         
          <View style={{flexDirection:'row'}}>
              <View style={{marginHorizontal:5}}>
          <Text style={styles.title}>Start Time:</Text>
          <Picker
            style={styles.onePicker} itemStyle={styles.onePickerItem}
            selectedValue={this.state.firstLanguage}
             onValueChange={(itemValue) => {
              this.setState({firstLanguage: itemValue})
              const newTodo = {
                User_Name:this.state.User,
                Teacher_Password:this.state.Password,
                Teacher_Start_Time:itemValue
              };
        
              let response = axios.post('http://192.168.8.101:4000/online_tutor_db/update_T_TuttionStartingtime',newTodo)
            }}
           // onValueChange={this.setdata}
          >
            <Picker.Item label="9:00 am" value="9:00 am" />
            <Picker.Item label="10:00 am" value="10:00 am" />
            <Picker.Item label="11:00 am" value="11:00 am" />
            <Picker.Item label="12:00 pm" value="12:00 pm" />
            <Picker.Item label="1:00 pm" value="1:00 pm" />
            <Picker.Item label="2:00 pm" value="2:00 pm" />
            <Picker.Item label="3:00 pm" value="3:00 pm" />
            <Picker.Item label="4:00 pm" value="4:00 pm" /> 
            <Picker.Item label="5:00 pm" value="5:00 pm" /> 
            <Picker.Item label="6:00 pm" value="6:00 pm" />
            <Picker.Item label="7:00 pm" value="7:00 pm" />
            <Picker.Item label="8:00 pm" value="8:00 pm" />
          </Picker>
          </View>
          <View>
          <Text style={styles.title}>End Time:</Text>
          <Picker
            style={styles.onePicker} itemStyle={styles.onePickerItem}
            selectedValue={this.state.seconedLanguage}
             onValueChange={(itemValue) => {
              this.setState({seconedLanguage: itemValue})
              const newTodo = {
                User_Name:this.state.User,
                Teacher_Password:this.state.Password,
                Teacher_End_Time:itemValue
              };
        
              let response = axios.post('http://192.168.8.101:4000/online_tutor_db/update_T_TuttionEndingtime',newTodo)
            }}
           // onValueChange={this.setdata}
          >
            <Picker.Item label="9:00 am" value="9:00 am" />
            <Picker.Item label="10:00 am" value="10:00 am" />
            <Picker.Item label="11:00 am" value="11:00 am" />
            <Picker.Item label="12:00 pm" value="12:00 pm" />
            <Picker.Item label="1:00 pm" value="1:00 pm" />
            <Picker.Item label="2:00 pm" value="2:00 pm" />
            <Picker.Item label="3:00 pm" value="3:00 pm" />
            <Picker.Item label="4:00 pm" value="4:00 pm" /> 
            <Picker.Item label="5:00 pm" value="5:00 pm" /> 
            <Picker.Item label="6:00 pm" value="6:00 pm" />
            <Picker.Item label="7:00 pm" value="7:00 pm" />
            <Picker.Item label="8:00 pm" value="8:00 pm" />
          </Picker>
          </View>
        </View>
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
   // backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
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
