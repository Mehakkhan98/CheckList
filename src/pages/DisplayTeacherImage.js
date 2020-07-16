
import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Modal from '../components/Counter_Modal';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { Background } from '../Style/Color';
import Input from '../components/Inputfield';
import { Paragraph } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import CustomButton from '../components/Button'
import { Ionicons } from '@expo/vector-icons';

import styles from '../components/style';
//import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          User:'',
          Password:'',
          dataSource:[],
          Notification:'',
          name:'',
          allData:true,
          FriendList:false
          

      }
  }
    componentDidMount()
   {
     this.getdata()
    }
   
  
 Accept=()=>{
    alert("i accept it")
 }
 Reject=()=>{
  alert("i Reject it")
 }
  setNotifiation=(Notification)=>{
    this.setState({Notification})
  }
  setdata= async (user,pass) => {
    try {
      const value = await AsyncStorage.setItem('Student_Name',user);
      
    } catch (error) {
      alert("Error in session")
    }
    try {
      const value1 = await AsyncStorage.setItem('Student_Password',pass);
     
    } catch (error) {
      // Error retrieving data    
    }
   
    Actions.View_Teacher_Profile()
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
     const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        
      };

      let response = axios.post('http://192.168.8.101:4000/online_tutor_db/single_Teacher',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                        dataSource:person
      
      
      

                    })
                    })

   };
openrequest=()=>{

  this.setState({allData:false})
  this.setState({FriendList:true})
  
}
opendata=()=>{
this.setState({FriendList:false})
this.setState({allData:true})

}

  render()
 {
  if(this.state.dataSource.length===0)
{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
          
    <ActivityIndicator animating={true} color="#2979FF" />
    <Text>Server is OFF </Text>
   
  </View>
    
  )
}
  return  this.state.dataSource.map((data,i) => {
  return (
 
     <View style={{flex:1,backgroundColor:'#ffff'}} key={i}>
  
        <View style={styles.header}>
        <TouchableOpacity onPress={()=> Actions.T_home()}>
        <Ionicons name="ios-arrow-back" size={32} color="white"/>
        </TouchableOpacity>

        </View>
 
       
        {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Female"? <Image style={styles.avatar}  source={require("../Images/female.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Male"? <Image style={styles.avatar}  source={require("../Images/male.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Not Define"? <Image style={styles.avatar}  source={require("../Images/profile.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 
     <View style={styles.body1}> 
             <View style={styles.bodyContent1}> 
       
       <Text style={styles.name}>{data.Teacher_Name}</Text>
       
  <Text style={styles.info}>{data.Teacher_Qualification=="Not Define"||null?"Qualification Not Define":data.Teacher_Qualification}</Text>
  <View style={{flexDirection:'row'}}>
  <View>
      <TouchableOpacity onPress={this.openrequest}>
    <Ionicons name="ios-people" size={36} color="gray" />
    </TouchableOpacity>

  
    </View>
    <View  style={{marginLeft:30}}>
    <Ionicons name="ios-heart" size={32} color="red" />
  <Text style={{marginLeft:10}}>{data.Teacher_Likes}</Text>
    </View>
    <View style={{marginLeft:30}}>
    <TouchableOpacity onPress={this.opendata}>
    <Ionicons name="ios-contact" size={32} color="gray" />
    </TouchableOpacity>
  </View>

 
  </View>
</View> 
 </View> 
 
<View  style={styles.borderline}>
</View>
{this.state.allData===true?
  <ScrollView showsVerticalScrollIndicator={false}>
<View    style={styles.container}>
<View  style={styles.description2}>

<Ionicons name="ios-mail" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Email:</Text>



</View>
<Text   style={{color: "#696969",fontSize:18,marginLeft:10}}  >  {data.Teacher_Email=="Not Define"||null?"Email Not Define":data.Teacher_Email} </Text>
<View  style={styles.description2}>

<Ionicons name="ios-call" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Contact:</Text>



</View>
<Text  style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Teacher_Phone=="Not Define"||null?"Phone Not Define":data.Teacher_Phone} </Text>
 
<View  style={styles.description2}>
<Ionicons name="ios-home" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Address:</Text>


</View>
<Text   style={{color: "#696969",fontSize:18,marginLeft:10}}  >  {data.Teacher_Adress=="Not Define"||null?"address Not Define":data.Teacher_Adress+" "+data.Teacher_City} </Text>





<View  style={styles.description2}>
{data.Student_Gender=="Male"?<Ionicons name="ios-man" size={32} color={Background}/>:<Ionicons name="ios-woman" size={32} color={Background}/>}
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Gender:</Text>



</View>
<Text  style={{color: "#696969",fontSize:18,marginLeft:10}}  >  {data.Teacher_Gender=="Not Define"||null?"Gender Not Define":data.Teacher_Gender} </Text>
<View  style={styles.description2}>
<Ionicons name="ios-bowtie" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Nature:</Text>


</View>
<Text   style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Desired_Student=="Not Define"||null?"your Nature is not defined ":"I want  "+data.Desired_Student+" Student"}</Text>

<View  style={styles.description2}>
<Ionicons name="ios-notifications" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Fee Range:</Text>
</View>
<Text    style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Teacher_Fee_Range=="Not Define"||null?"Fee Range Not Define":"I deserve "+data.Teacher_Fee_Range}  </Text>
<View  style={styles.description2}>
<Ionicons name="ios-ribbon" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Experience: </Text>

</View>
<Text   style={{color: "#696969",fontSize:18,marginLeft:10}}  >  {data.Teacher_Experience=="Not Define"||null?"Experience Not Define":data.Teacher_Experience} </Text>

<View  style={styles.description2}>
<Ionicons name="ios-alarm" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Timmings: </Text>


</View>
<Text    style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Teacher_Start_Time=="Not Define"||null&&data.Teacher_End_Time=="Not Define"||null?"Tuttion  time is not define ":data.Teacher_Start_Time+"  to  "+data.Teacher_End_Time} </Text>

<View  style={styles.description2}>
<Ionicons name="ios-book" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Tuttion Subject: </Text>


</View>
<Text  style={{color: "#696969",fontSize:18,marginLeft:10}}   >  {data.Desired_Subjects=="Not Define"||null=="Not Define"||null?"Tuttion  Subject is not define ":"I am expert in  "+data.Desired_Subjects} </Text>

<View  style={styles.description2}>
<Ionicons name="ios-book" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Desired Class: </Text>


</View>
<Text  style={{color: "#696969",fontSize:18,marginLeft:10}}   >  {data.Desired_Class=="Not Define"||null=="Not Define"||null?"Desired Class is not define ":"I can teach "+data.Desired_Class} </Text>


<View  style={styles.description2}>
<Ionicons name="ios-information-circle" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Information: </Text>

</View>

<Paragraph    style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Teacher_Info=="Not Define"||null?"Info Not Define":data.Teacher_Info}  </Paragraph>

            </View>
            <Text  style={{fontWeight:800,color:"#696969",fontSize:22,marginLeft:3}}>Feed Backs</Text>
{this.state.dataSource.map((data,i) => {
     
     return  data.Teacher_Comment.slice().reverse().map((d)=>{
     
         return (
 
           <View   style={{marginBottom:25,marginTop:10}}>
            
            <View style={{flexDirection:'row'}}>
                <View>
             <Image style={styloo.avatar1}  source={require("../Images/profile.png")}/>
             </View>
             <View>
        
<Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d.Name} </Text>
<Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d.Msg} </Text>
</View>
</View>
            
            
             <Text style={{color:'gray',marginLeft:10}}>_____________________________________________________</Text>
            
            
             </View>
         
          );
        });
  })
}
            </ScrollView>
          
           :
            <ScrollView showsVerticalScrollIndicator={false}>
              {data.Teacher_FriendList.length===0?<Text style={{color:"red",marginTop:50,marginLeft:120}}>No Tuttion Request</Text>:

          data.Teacher_FriendList.slice().reverse().map((d)=>{
     
            return (
               <TouchableOpacity  onPress={()=>this.setdata(d.Name,d.Password)}>
              <View   style={{marginBottom:25,marginTop:10}}>
                <Text style={{fontWeight:800,color:"#696969",fontSize:16,marginLeft:3}}>Tuttion Requests</Text>
               <View style={{flexDirection:'row'}}>
                   <View>
                   
                <Image style={styloo.avatar1}  source={require("../Images/profile.png")}/>
                </View>
                <View>
            
   <Text style={{color:'gray',fontSize:16,marginLeft:60,fontWeight:600,marginTop:20}}>{d.Name}</Text>
   
   </View>
   <View style={{right:105,position:'absolute'}}>
   <TouchableHighlight
        style={styloo.openButton}
        onPress={() => this.Accept}
      >
        <Text style={styloo.textStyle}>Accept</Text>
      </TouchableHighlight>
   </View>
  <View style={{right:15,position:'absolute'}}>
  <TouchableHighlight
        style={styloo.openButton}
        onPress={() => this.Reject}
      >
        <Text style={styloo.textStyle}>Reject</Text>
      </TouchableHighlight>
  </View>
    
   </View>
         
  
               
               
                <Text style={{color:'gray',marginLeft:10,marginTop:12}}>________________________________________________________</Text>
               
               
                </View>
              
             </TouchableOpacity>
        );
            
            
            })}
            </ScrollView>
             }
          
 </View>
     
    );
   }) 
 }
}
const styloo = StyleSheet.create({
        
  image: { width: 200, height: 200, backgroundColor: 'gray',marginTop:5,marginLeft:50,borderRadius:100 },
  item: {
  
   paddingVertical:18,
   fontSize: 16,
   height: 40,
   color:"#455a64",
   paddingHorizontal:10
   
 },
 openButton: {
  justifyContent: "center",
  alignItems: "center",
  width:80,
  height:40,
  backgroundColor: Background,
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  marginBottom:10
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},

 avatar1: {

   width: 50,
   height: 50,
   borderRadius: 25,
   borderWidth: 4,
   borderColor: "#696969",
 //  alignSelf:'center',
   position: 'absolute',
  
   marginBottom:2,
   marginRight:10

 
 
 },
});



