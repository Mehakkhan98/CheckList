
import React, { Component } from 'react';
import {AsyncStorage,TouchableHighlight} from 'react-native';
import axios from 'axios';
import Whatsapp from '../components/Whatsapp';
import Call from '../components/Call';
import Sms from '../components/Sms';
import Rating from '../components/Rating';
import MapView from '../components/MapView';
import { ActivityIndicator, Colors } from 'react-native-paper';

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
  FlatList
} from 'react-native';
import Input from '../components/Inputfield';
import { Paragraph } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import CustomButton from '../components/Button'
import { Ionicons } from '@expo/vector-icons';

import styles from '../components/style';
import { Background } from '../Style/Color';
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
          latitude: null,
          longitude: null,
          showmap:false,
          OwnData:[],
          meeting:false,
          Comment_data:[],
          MY_Name:'',
          teacher:'',
          TPassword:''


      }
  }
  Meeting=()=>{
    if(this.state.meeting===false)
    {
      this.setState({meeting:true})
      this.setState({showmap:false})
    }
    else{
      this.setState({meeting:false})
    }
  }
    componentDidMount=async()=>
   {
    try {
      const value = await AsyncStorage.getItem('User_Name');
      if (value !== null) {
      
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
      alert("Error in session")
    }
  
            const newTodo = {
                User_Name:this.state.User
                
              };
        
            
               axios.post('http://192.168.8.101:4000/online_tutor_db/S_By_UserName',newTodo)
                    
                    .then(
                        (response2) => {
                            const person=response2.data
                          
                            this.setState({
                                OwnData:person,
                               
                            })
                            })
                            .catch(err => console.log('err is', err)); 
                           
                              
       
            
       
     this.getdata()
     this.getCurrentPosition()
     
    }
    getCurrentPosition=()=>{
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          },()=> console.log(this.state.latitude,this.state.longitude));
        },
       
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
      );
    }
    
  
   
    askfortution=(user,list)=>{
  
  
 this.state.Comment_data=this.state.Comment_data.concat(list,{"Name":this.state.User,"Password":this.state.Password,"Status":"send"})
     
           
        const newTodo1 = {
          
          User_Name:user,
           Teacher_FriendList:this.state.Comment_data
          
          
          
        
         
          
          
        };
    
        let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/updateTeacherRequest',newTodo1)
       
        this.setState({Comment_data:[]})
        alert("Tuttion Request Sent")
       
         
      
      
    
     }
  setNotifiation=(Notification)=>{
    this.setState({Notification})
  }
  ShowMap=()=>{
    if(this.state.showmap===false)
    {
      this.setState({showmap:true})
      this.setState({meeting:false})
    }
    else{
      this.setState({showmap:false})
    }
  }
   getdata= async () => {
     try {
       const value = await AsyncStorage.getItem('Teacher_Name');
       if (value !== null) {
         // We have data!!
         this.setState({teacher:value})
        
       
       }
     } catch (error) {
       alert("Error in session")
     }
     try {
       const value1 = await AsyncStorage.getItem('Teacher_Password');
       if (value1 !== null) {
         this.setState({TPassword:value1})
         
       
       }
     } catch (error) {
       // Error retrieving data    
     }
     const newTodo = {
        User_Name:this.state.teacher,
        Teacher_Password:this.state.TPassword,
        
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
  let data = null;
  console.log("User",this.state.User),
  data.Teacher_FriendList.forEach((d)=>{
    console.log("Checkkkkkkkkk",d.Name === this.state.User)
 
  d.Name === this.state.User ? (
  <TouchableOpacity style={{position:'absolute',bottom:3,right:7}}onPress={()=>this.removerequest(data.User_Name,data.Teacher_FriendList)} text="Show More">
      <Ionicons name="ios-remove-circle" size={48} color={Background}/>
      </TouchableOpacity>
      ) : (
      <TouchableOpacity style={{position:'absolute',bottom:3,right:7}}onPress={()=>this.askfortution(data.User_Name,data.Teacher_FriendList)} text="Show More">
      <Ionicons name="ios-add-circle" size={48} color={Background}/>
      </TouchableOpacity>
      ) 
  })
  return  this.state.dataSource.map((data,i) => {
    console.log("images",data.Teacher_Gender,data.Teacher_Picture)
  return (
 
     <View style={{flex:1,backgroundColor:"#ffff"}} key={i}>
  
        <View style={styles.header}>
        <TouchableOpacity onPress={()=> Actions.S_home()}>
        <Ionicons name="ios-arrow-back" size={32} color="white"/>
        </TouchableOpacity>

   
        </View>
 {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Female"? <Image style={styles.avatar}  source={require("../Images/female.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Male"? <Image style={styles.avatar}  source={require("../Images/male.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 {data.Teacher_Picture==="Not Define"&&data.Teacher_Gender==="Not Define"? <Image style={styles.avatar}  source={require("../Images/profile.png")}/>:<Image style={styles.avatar}  source={{ uri: data.Teacher_Picture}} />}
 
     <View style={styles.body1}> 
             <View style={styles.bodyContent1}> 
       
       <Text style={styles.name}> {data.Teacher_Name=="Not Define"||null?"address Not Define":data.Teacher_Name}</Text>
       
  <Paragraph style={styles.info}> {data.Teacher_Qualification=="Not Define"||null?"Qualification Not Define":data.Teacher_Qualification}</Paragraph>
  <Rating/>
</View> 
 </View> 
 
<View  style={styles.borderline}>
</View>
<KeyboardAvoidingView   keyboardVerticalOffset = {-500} // adjust the value here if you need more padding
  style = {{ flex: 1 }}
  keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} >
<ScrollView showsVerticalScrollIndicator={false}>
<View    style={styles.container}>
  <View style={{flexDirection:'row'}}>
    <View>
<View  style={styles.description2}>

<Ionicons name="ios-mail" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Email:</Text>



</View>
<Text   style={{color: "#696969",fontSize:16,marginLeft:10}}  >  {data.Teacher_Email=="Not Define"||null?"Email Not Define":data.Teacher_Email} </Text>
</View>
<View style={{left:3}}>
<View  style={styles.description2}>

<Ionicons name="ios-call" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2,}}>Contact:</Text>




</View>
{/* <Text  style={{color: "#696969",fontSize:16,marginLeft:10,position:'absolute',marginTop:35}} >  {data.Teacher_Phone=="Not Define"||null?"Phone Not Define":data.Teacher_Phone} </Text> */}
<Text  style={{color: "#696969",fontSize:16,marginLeft:40,position:'absolute',marginTop:35}} >Confidential </Text>

</View>
</View>
<View  style={styles.description2}>
<Ionicons name="ios-home" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Address:</Text>


</View>
<Text   style={{color: "#696969",fontSize:18,marginLeft:10}}  >  {data.Teacher_Adress=="Not Define"||null?"address Not Define":data.Teacher_Adress+" "+data.Teacher_City} </Text>


<Text style={{color:'gray',marginLeft:20}}>_____________________________________________________</Text>
  
<View style={{flexDirection:'row'}}>
  <View>

<View  style={styles.description2}>
{data.Student_Gender=="Male"?<Ionicons name="ios-man" size={32} color={Background}/>:<Ionicons name="ios-woman" size={32} color={Background}/>}
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Gender:</Text>



</View>
<Text  style={{color: "#696969",fontSize:16,marginLeft:10}}  >  {data.Teacher_Gender=="Not Define"||null?"Gender Not Define":"hi i am "+data.Teacher_Gender} </Text>
</View>
<View style={{right:15,position:'absolute'}}>
<View  style={styles.description2}>
<Ionicons name="ios-bowtie" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2,}}>Desired Nature:</Text>


</View>
<Text   style={{color: "#696969",fontSize:16,marginLeft:10,}} >  {data.Desired_Student=="Not Define"||null?"Nature is not defined ":data.Desired_Student+" Student"}</Text>
</View>
</View>
<View style={{flexDirection:'row'}}>
<View>

<View  style={styles.description2}>
 
<Ionicons name="ios-notifications" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Fee Range:</Text>
</View>
<Text    style={{color: "#696969",fontSize:16,marginLeft:10}} >  {data.Teacher_Fee_Range=="Not Define"||null?"Range Not Define":"I deserve "+data.Teacher_Fee_Range}  </Text>
</View>
<View style={{right:30,position:'absolute'}}>
  <View  style={styles.description2}>
  <Ionicons name="ios-heart" size={32} color={Background}/>
  <Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2,}}>No of Likes:</Text>
  
  
  </View>
  <Text   style={{color: "#696969",fontSize:16,left:60,position:'relative'}} >  {data.Teacher_Likes=="Not Define"||null?"Likes not defined ":+data.Teacher_Likes}</Text>
  </View>
</View>
<Text style={{color:'gray',marginLeft:20}}>_____________________________________________________</Text>
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
<Ionicons name="ios-information-circle" size={32} color={Background}/>
<Text style={{color:Background ,fontSize:22,marginHorizontal:5,marginTop:2}}>Information: </Text>

</View>

<Paragraph    style={{color: "#696969",fontSize:18,marginLeft:10}} >  {data.Teacher_Info=="Not Define"||null?"Info Not Define":data.Teacher_Info}  </Paragraph>

  
</View>
              


              
      
        <View   style={{ justifyContent: 'center',flexDirection:'row',marginVertical:15}}>        
<Whatsapp  data={data.Teacher_Phone}/>
<Sms data={data.Teacher_Phone}/>
<Call data={data.Teacher_Phone}/>
</View>
<View style={{ justifyContent: "center",
      alignItems: "center",}}>
  <TouchableHighlight
        style={customstyle.openButton}
        onPress={() => this.ShowMap()
          
        }
      >
        <Text style={customstyle.textStyle}>{this.state.showmap===false?"Show Path":"Hide Path"}</Text>
      </TouchableHighlight>
      </View>
      {
        this.state.OwnData.map((owndata)=>
        {
         return( this.state.showmap===true?<MapView lat={data.Lat} lang={data.Lang} 
          latitude={owndata.Lat} longitude={owndata.Lang} category="homepath"/>
        
          :null
         )
        })

        
     
      }
        <View style={{ justifyContent: "center",
      alignItems: "center",margintop:5}}>
  <TouchableHighlight
        style={customstyle.openButton}
        onPress={() => this.Meeting()
          
        }
      >
        <Text style={customstyle.textStyle}>{this.state.meeting===false?"Start Ride":"Stop Ride"}</Text>
      </TouchableHighlight>
      </View>
      {
        this.state.meeting===true?<MapView lat={data.Lat} lang={data.Lang} 
        latitude={this.state.latitude} longitude={this.state.longitude} category="mypath"/>
      
        :null
      }
        </ScrollView>
        </KeyboardAvoidingView>
      
       {/* {
          console.log("User",this.state.User),
          data.Teacher_FriendList.forEach((d)=>{
            console.log("Checkkkkkkkkk",d.Name === this.state.User)
         if(d.Name===this.state.User)
        //  {
          d.Name === this.state.User ? (
          <TouchableOpacity style={{position:'absolute',bottom:3,right:7}}onPress={()=>this.removerequest(data.User_Name,data.Teacher_FriendList)} text="Show More">
              <Ionicons name="ios-remove-circle" size={48} color={Background}/>
              </TouchableOpacity>
              ) : (
              <TouchableOpacity style={{position:'absolute',bottom:3,right:7}}onPress={()=>this.askfortution(data.User_Name,data.Teacher_FriendList)} text="Show More">
              <Ionicons name="ios-add-circle" size={48} color={Background}/>
              </TouchableOpacity>
              ) 
         
          // }
           
            // else{ nhi if b nhi chal raha

              //  (<TouchableOpacity style={{position:'absolute',bottom:3,right:7}}onPress={()=>this.askfortution(data.User_Name,data.Teacher_FriendList)} text="Show More">
              // <Ionicons name="ios-add-circle" size={48} color={Background}/>
              // </TouchableOpacity>) 
            
            // }
        } 
          )} */}
        </View>  
            
     
    );
   }) 
 }
}


const customstyle = StyleSheet.create({
   
  openButton: {
    justifyContent: "center",
    alignItems: "center",
    width:200,
    height:50,
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
 
});
