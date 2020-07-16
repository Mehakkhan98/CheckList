import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,Alert,icon } from 'react-native';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import DisplayImage from '../pages/DisplayImage';
import BoldText from './BoldText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';
import * as Sharing from 'expo-sharing';
import * as  ImagePicker from 'expo-image-picker';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
  state = {
    image: null,
    uname:'',
    Password:'',
    dataSource:[]
  };
  componentDidMount()
   {
    this.getdata()
   console.log("Check",this.props.data)
   }
  
  getdata= async () => {
    try {
      const value = await AsyncStorage.getItem('User_Name');
      if (value !== null) {
        // We have data!!
        this.setState({uname:value})
        console.log("Session Value from ImagePicker",value);
       
      }
    } catch (error) {
      alert("Error in session")
    }
    try {
      const value1 = await AsyncStorage.getItem('Password');
      if (value1 !== null) {
        this.setState({Password:value1})
        console.log("Session pass from ImagePicker",this.state.Password);
       
      }
    } catch (error) {
      // Error retrieving data
      alert("Error in session")
    }
    if(this.props.data=="Teacher")
    {
      console.log("I reached inside the Teacher log")
      const newTodo = {
        User_Name:this.state.uname,
        Teacher_Password: this.state.Password,
        
      };

      axios.post('http://192.168.8.103:4000/online_tutor_db/LoginTeacher_Data', newTodo)
      .then((response2) => {
        const person=response2.data
        this.setState({
          dataSource:person
        }),console.log("Here is record of Login person",this.state.dataSource.Teacher_Picture)
        if(this.state.dataSource!=null)
        {
              ToRenderTeacherPicture();
        }
      })
    }
   
    if(this.props.data=="Student")

    {
      const newTodo = {
        User_Name:this.state.uname,
        Student_Password: this.state.Password,
        
      };

      axios.post('http://192.168.8.103:4000/online_tutor_db/LoginStudent_Data', newTodo)
      .then((response2) => {
        const person=response2.data
        this.setState({
          dataSource:person
        }),console.log("Here is record of Login person",this.state.dataSource.Student_Picture)
        if(this.state.dataSource!=null)
        {
              ToRenderPicture();
        }
        
        
    } 
    
    )
    
  
     
        
    }
    
    ToRenderTeacherPicture=async()=>{
      console.log("Reached in Teacher Log")
      try {
      
        await AsyncStorage.removeItem('Picture');
         await AsyncStorage.setItem( "Picture", this.state.dataSource.Teacher_Picture)
        
     } catch (error) {
       // Error saving data
     }
     try {
       const value3 =  await AsyncStorage.getItem('Picture');
       if (value3 !== null) {
         // We have data!!
         this.setState({image:value3})
        
         console.log("Session Value of picture",value3);
         
       }
       else{
         alert("value is null")
       }
     } catch (error) {
       // Error retrieving data
     }
    }
  ToRenderPicture= async()=>
  {
            
    
    
    try {
      
      await AsyncStorage.removeItem('Picture');
       await AsyncStorage.setItem( "Picture", this.state.dataSource.Student_Picture)
      
   } catch (error) {
     // Error saving data
   }
   try {
     const value3 =  await AsyncStorage.getItem('Picture');
     if (value3 !== null) {
       // We have data!!
       this.setState({image:value3})
      
       console.log("Session Value of picture",value3);
       
     }
     else{
       alert("value is null")
     }
   } catch (error) {
     // Error retrieving data
   }
  }
     
         
       
     
     
      
  }
  
Display=()=>{
  Actions.Display_Image()
}
  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: [4,3],
      quality: 0.2,
      allowsEditing: true,
    });
    if (!cancelled) 
    {
    this.setState({ image: uri });
    if(this.props.data=="Student")
    {
    const newTodo = {
      User_Name:this.state.uname,
      Student_Password:this.state.Password,
      Student_Picture:this.state.image,
      
    };

    axios.post('http://192.168.8.103:4000/online_tutor_db/updateSprofilePicture', newTodo)
    .then(() => Alert.alert(
    
     'Picture Set'))
    
     
    .catch(err=>console.log(err)); 

    }
  }
  if (this.props.data=="Teacher")
  {
    const newTodo = {
      User_Name:this.state.uname,
      Teacher_Password:this.state.Password,
      Teacher_Picture:this.state.image,
      
    };

    axios.post('http://192.168.8.103:4000/online_tutor_db/updateTprofilePicture', newTodo)
    .then(() => Alert.alert(
    
     'Picture Set'))
    
     
    .catch(err=>console.log(err)); 

    
  }
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    this.setState({ image: uri });
  };



   

  render() {
   
  
    
    if(this.props.data=="Student")
    {
     
      
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> Actions.Display_Image()}>
        <Image style={styles.image} source={{ uri: this.state.image }} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
        </View>
        <Text   style={{color:'black',fontSize:18}} >{this.state.uname}</Text> 
    
      </View>
    );
      }
    
    if(this.props.data=="Teacher")
    {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=> Actions.Display_TImage()}>
          <Image style={styles.image} source={{ uri: this.state.image }} />
          </TouchableOpacity>
          <View style={styles.row}>
            <Button onPress={this.selectPicture}> Gallery </Button> 
            <Button onPress={this.takePicture}>  Camera</Button>
          </View>
          <Text style={{color:'black',fontSize:18}} >{this.state.uname}</Text> 
        </View>
      );
    }
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  row: { flexDirection: 'row' },
  image: { width: 280, height: 250, backgroundColor: 'gray',marginTop:5 },
  button: {
    padding: 5,
    marginVertical: 15,
    marginHorizontal:4,  
    backgroundColor: '#dddddd',
  },
  container: {
   // flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
