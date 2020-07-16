
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
    
   if(this.props.Id=="Student"){

   
    return (
      <View style={styles.container}>
       
        
        <Text style={styles.title}>Select Desired Subject:</Text>
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.firstLanguage}
           onValueChange={(itemValue) => {
            this.setState({firstLanguage: itemValue})
            const newTodo = {
              User_Name:this.state.User,
              Student_Password:this.state.Password,
              Student_Subjects:itemValue
            };
      
            let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateStudentSubjects',newTodo)
          }}
        >
          <Picker.Item label="Quran Class" value="Quran Class" />
           <Picker.Item label="Under_Matric" value="Under_Matric" />
              <Picker.Item label="Matric/Science" value="Matric/Science" />
              <Picker.Item label="Matric/Art" value="Matric/Art" />
              <Picker.Item label="Fsc" value="Fsc" />
               <Picker.Item label="FA" value="FA" />
               <Picker.Item label="Bsc" value="Bsc" />
               <Picker.Item label="BA" value="BA" />
               <Picker.Item label="Msc" value="Msc" />
               <Picker.Item label="MA" value="MA" />
                <Picker.Item label="Tecnnical" value="Technical" />
                  <Picker.Item label="Non-Technical" value="Non-Technical" />
                  <Picker.Item label="Others" value="Others" />
                  
           
        
        </Picker>
       
      </View>
    );
        }
        if(this.props.Id=="Teacher")
        {
          return (
            <View style={styles.container}>
             
              
              <Text style={styles.title}>Desired Class:</Text>
              <Picker
                style={styles.onePicker1} itemStyle={styles.onePickerItem}
                selectedValue={this.state.firstLanguage}
                 onValueChange={(itemValue) => {
                  this.setState({firstLanguage: itemValue})
                  const newTodo = {
                    User_Name:this.state.User,
                    Teacher_Password:this.state.Password,
                    Desired_Class:itemValue
                  };
            
                  let response = axios.post('http://192.168.8.100:4000/online_tutor_db/update_T_DesiredClass',newTodo)
                }}
              >
                 <Picker.Item label="Under_Matric" value="Under_Matric" />
              <Picker.Item label="Matric/Science" value="Matric/Science" />
              <Picker.Item label="Matric/Art" value="Matric/Art" />
              <Picker.Item label="Fsc" value="Fsc" />
               <Picker.Item label="FA" value="FA" />
               <Picker.Item label="Bsc" value="Bsc" />
               <Picker.Item label="BA" value="BA" />
               <Picker.Item label="Msc" value="Msc" />
               <Picker.Item label="MA" value="MA" />
                <Picker.Item label="Tecnnical" value="Technical" />
                  <Picker.Item label="Non-Technical" value="Non-Technical" />
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
  onePicker1: {
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
