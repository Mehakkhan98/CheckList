
import React,{Component} from "react";
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { Text, View ,ScrollView,Button,TouchableOpacity,StyleSheet,Alert,TextInput} from 'react-native';
import { Card ,Icon} from 'react-native-elements'
import Modal from './Counter_Modal';
import img from "../Images/profile.png";
import { Actions } from 'react-native-router-flux';
import { Ionicons } from "@expo/vector-icons";

export default class Cards extends Component {
  
  constructor(props)
  {
        super(props);
        this.Likes = [];
        this.Selected_Like=[],
        this.Comment=[],
        this.Dynamic_Comment=[]
       
      
      
      this.state={
        User:'',
         Login:[],
         OwnData:[],
         Dummy:[],
         Like:[],
        count:false,
        CheckList:[],
        Total:0,
        Comment:[],
        Comment_data:[],
        input:'',
        day:"",
        month:"",
        year:"",
        time:''

        


      }
  }
 
  componentDidMount= async ()=>
  {
    this.ShowCurrentDate();
    this.GetTime();
    try {
      const value = await AsyncStorage.getItem('User_Name');
      if (value !== null) {
        // We have data!!
        this.setState({User:value})
       
       
      }
    } catch (error) {
      alert("Error in session")
    }
    if(this.props.Identity=="Teacher")
         {
           
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
                           
                              
         }
        if(this.props.Identity=="Student")
        {
         
            
           
            
            const newTodo = {
                User_Name:this.state.User
                
              };
        
            
               axios.post('http://192.168.8.101:4000/online_tutor_db/T_By_UserName',newTodo)
                    
                    .then(
                        (response2) => {
                            const person=response2.data
                            this.setState({
                                OwnData:person,
                                
                            })
                            })
                         
                           
           
        }
       
  
    this.CheckLoginStudent();
   
  }
 
  removeRowRef=(user,pass,total,notify)=>{

    this.state.Dummy=this.state.Dummy.concat(notify)
    this.state.Dummy=this.state.Dummy.filter(item=>item!=this.state.User)
    
    
     this.Likes= this.Likes.filter(item=>item!=user)
    let filteredArray = this.state.Like.filter(item => item !== user)
    this.setState({Like: filteredArray})
    this.setState({count: this.state.count - 1})
    if(this.props.Identity=="Student"){
      const newTodo = {
        User_Name:user,
        Student_Password:pass,
        Student_Likes:total-1
        
      };

      let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateSLikes',newTodo)
      const newTodo1 = {
        User_Name:user,
        Student_Notifications:this.state.Dummy
        
      };

      let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/StudentNotifications',newTodo1)
      this.state.Dummy=[]
        
    }
      
      if(this.props.Identity=="Teacher"){
        const newTodo = {
          User_Name:user,
          Teacher_Password:pass,
          Teacher_Likes:total-1,
          
        };
  
        let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateTLikes',newTodo)
        const newTodo1 = {
          
          User_Name:user,
          Teacher_Notifications:this.state.Dummy
          
        };
  
        let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/TeacherNotifications',newTodo1)
        this.state.Dummy=[]
        
      }
     
  }
  storeRowRef=async (user,pass,total,notify)=>{
 



    this.Likes.push(user);
 
      this.state.Dummy=this.state.Dummy.concat(notify,this.state.User)
      
   
    if(this.Likes.includes(user)===true)
    {
      var joined = this.state.Like.concat(user);
      this.setState({Like:joined},() => { console.log(this.state.Like) })
      this.setState({count:true})
      this.setState({Total:total+1})
      
    
      if(this.props.Identity=="Student"){
        const newTodo = {
          User_Name:user,
          Student_Password:pass,
          Student_Likes:total+1
          
        };
  
        let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateSLikes',newTodo)
        
        
        
        const newTodo1 = {
          User_Name:user,
          Student_Notifications:this.state.Dummy
          
        };
  
        let response1 = axios.post('http:/192.168.8.101:4000/online_tutor_db/StudentNotifications',newTodo1)
              
        this.state.Dummy=[]
        
              
      }
      if(this.props.Identity=="Teacher"){
        const newTodo = {
          User_Name:user,
          Teacher_Password:pass,
          Teacher_Likes:total+1,
          
        };
  
        let response = axios.post('http://192.168.8.101:4000/online_tutor_db/updateTLikes',newTodo)
      
         
        
        const newTodo1 = {
          
          User_Name:user,
          Teacher_Notifications:this.state.Dummy
          
        };
  
        let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/TeacherNotifications',newTodo1)
        this.state.Dummy=[]
      
      }
    
     }
    
  }
  ShowCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({day:date},()=>  console.log("Date",this.state.day))
    this.setState({month:month},()=> console.log("Month",this.state.month))
    this.setState({year:year},()=>console.log("Year",this.state.year))
  
   
    
   }
  ViewProfile= async (name,pass)=>{
    try {
      await AsyncStorage.removeItem('Teacher_Name');
      await AsyncStorage.removeItem('Teacher_Password');
      await AsyncStorage.setItem( "Teacher_Name", name)
      await AsyncStorage.setItem("Teacher_Password",pass)
     
    } catch (error) {
      // Error saving data
    }
   
    
    Actions.View_Profile();
  }
  checklogin=(name)=>{
    Alert.alert(
      name,

      "Online!",
      [
       
        { text: "Ok", onPress: () => console.log(), style: "cancel" }
      ],
      { cancelable: false }
    )
  }
  
  CheckLoginStudent= async()=>{
    if(this.props.Identity=="Student"){
    axios.get('http://192.168.8.101:4000/online_tutor_db/getall_Login-Student')
                 
    .then(
        (response2) => {
            const person=response2.data
            this.setState({
                Login:person,
                
            })
           }
    )
          }else{
            axios.get('http://192.168.8.101:4000/online_tutor_db/get_Login_Teacher')
                
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                        Login:person,
                        })
                   })
          } 
  }
  ViewTeacherProfile= async (name,pass)=>{
    try {
      await AsyncStorage.removeItem('Student_Name');
      await AsyncStorage.removeItem('Student_Password');
      await AsyncStorage.setItem( "Student_Name", name)
      AsyncStorage.setItem("Student_Password",pass)
     
    } catch (error) {
      // Error saving data
    }
   
    
    Actions.View_Teacher_Profile();
  }
  GetTime() {
 
    
    var date, TimeType, hour, minutes, seconds, fullTime;
 
    
    date = new Date();
 
   
    hour = date.getHours(); 
 
   
    if(hour <= 11)
    {
 
      TimeType = 'AM';
 
    }
    else{
      TimeType = 'PM';
 
    }
 
 
   
    if( hour > 12 )
    {
      hour = hour - 12;
    }
 
    
    if( hour == 0 )
    {
        hour = 12;
    } 
 
 
    
    minutes = date.getMinutes();
 
    
    if(minutes < 10)
    {
      minutes = '0' + minutes.toString();
    }
 
 
   
    seconds = date.getSeconds();
 
    if(seconds < 10)
    {
      seconds = '0' + seconds.toString();
    }
 
    fullTime = hour.toString() + ':' + minutes.toString()  + ' ' + TimeType.toString();
 
 
    this.setState({
 
      time: fullTime
 
    },console.log(this.state.time));
  }
         
addComment=(user,comment)=>{
 
 
  if(this.state.Comment.includes(user)===true)
  {
    let filteredArray = this.state.Comment.filter(item => item !== user)
    this.setState({Comment: filteredArray})
  }
  else{
   
    var joined = this.state.Comment.concat(user);
    this.setState({Comment:joined},() => { console.log(this.state.Comment) })
  }
  
  

}
sendComment=(u,comment)=>{

  this.Dynamic_Comment.push({"Client":u.User_Name,"Name":this.state.User,"Msg":this.state.input,"Date":this.state.day+"/"+this.state.month+"/"+this.state.year,"Time":this.state.time});
 
  this.state.Comment_data=this.state.Comment_data.concat(comment,{"Name":this.state.User,"Msg":this.state.input,"Date":this.state.day+"/"+this.state.month+"/"+this.state.year,"Time":this.state.time})
  if(this.props.Identity=="Student"){
       
    
    const newTodo1 = {
      User_Name:u.User_Name,
      Student_Password:u.Student_Password,
       Student_Comment:this.state.Comment_data
     
     
      
    };

    let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/updateSComment',newTodo1)
    this.setState({input:''})
    this.setState({Comment_data:[]})
    
   
    
          
  }
  if(this.props.Identity=="Teacher"){
    
     
    
    const newTodo1 = {
      
      User_Name:u.User_Name,
      Teacher_Password:u.Teacher_Password,
        Teacher_Comment:this.state.Comment_data
      
      
    };

    let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/updateTComment',newTodo1)
    this.setState({input:''})
    this.setState({Comment_data:[]})
   
     
  
  }

}     

    setsearch=(e)=>{
      this.setState({input:e})
    }
DeleteComment=(u,useless,notify)=>{

  this.state.Comment_data=this.state.Comment_data.concat(notify)
  this.state.Comment_data=this.state.Comment_data.filter(item=>item!==useless)
  console.log(" iam Comment state",this.state.Comment_data)
  if(this.props.Identity=="Student"){
       
    
    const newTodo1 = {
      User_Name:u.User_Name,
      Student_Password:u.Student_Password,
      Student_Comment:this.state.Comment_data
     
      
    };

    let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/updateSComment',newTodo1)
    this.state.Comment_data=[],
    alert("Comment Deleted") 
   
    
          
  }
  if(this.props.Identity=="Teacher"){
    
     
    
    const newTodo1 = {
      
      User_Name:u.User_Name,
      Teacher_Password:u.Teacher_Password,
      Teacher_Comment:this.state.Comment_data
      
    };

    let response1 = axios.post('http://192.168.8.101:4000/online_tutor_db/updateTComment',newTodo1)
    this.state.Comment_data=[],
     alert("Comment Deleted") 
  
  }
}
  render()
  {
   
  if(this.props.Identity=="Student")
  {
   
    return(
      <ScrollView showsVerticalScrollIndicator={false} >
          { this.props.data.slice().reverse().map(((u, i) => {
         
        
           
     return (
     
    <Card  key={i}
     containerStyle={{borderWidth: 1, borderColor: '#1c313a', elevation: 0,width:320 ,borderRadius:10, shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,}}
    
      title='Student'   

     
>
       
      <Text>Student Name: {u.Student_Name}</Text>
      <Text>Student Class: {u.Student_Class}</Text>
        <Text>Student Subject : {u.Student_Subjects}</Text>
        <Text>Student Email: {u.Student_Email}</Text>
       

        <View style={{flexDirection:"row"}}> 
         
        
       {
          
          this.state.Like.includes(u.User_Name)===true 
         
          || u.Student_Notifications.includes(this.state.User)===true
        
         
           ?  
            
           <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.removeRowRef(u.User_Name,u.Student_Password,u.Student_Likes,u.Student_Notifications)}><Ionicons name="ios-heart" size={32} color="red" /></TouchableOpacity> 
        : 
          <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.storeRowRef(u.User_Name,u.Student_Password,u.Student_Likes,u.Student_Notifications)}><Ionicons name="ios-heart" size={32} color="#2979FF" /></TouchableOpacity> 

        
     
      }
      <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.addComment(u.Student_Name,u.Student_Comment)} ><Ionicons name="ios-chatbubbles" size={32} color="#2979FF" /></TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:6}} onPress={()=>this. ViewTeacherProfile(u.User_Name,u.Student_Password)}><Ionicons name="ios-contact" size={32} color="#2979FF" /></TouchableOpacity>
  
        </View>

        {
          this.state.Login.map((data,i)=>(
           
          data.User_Name===u.User_Name?
          
 <TouchableOpacity style={{height:20,width:20,borderRadius:25/2,backgroundColor:'green',right:3,top:3,position:'absolute'}}onPress={() =>this.checklogin(u.Student_Name)}>
          </TouchableOpacity>:null 

        
          ))
        }
        
         <TouchableOpacity style={{marginLeft:12}}><Modal all={u} show={u.Student_Likes}data={u.Student_Notifications}/></TouchableOpacity>
   {
  
     this.state.Comment.includes(u.Student_Name)===true?
     <View>
        <Text style={{fontWeight:800,color:'black',marginLeft:3}}>FeedBacks</Text>
      
        {
        
        Object.keys(u.Student_Comment).map((data,index)=>{
         
        return( <View style={{flexDirection:"row"}}>
        <View>
          <View style={{flexDirection:'row'}}>
        <Text key={data} style={{fontWeight:500,color:'black',marginLeft:3}}>{u.Student_Comment[data].Name}</Text>
        <Text key={data} style={{color:'gray',fontSize:11,marginLeft:5}}>{u.Student_Comment[data].Time}</Text>
        <Text key={data} style={{color:'gray',fontSize:11,marginLeft:50}}>{u.Student_Comment[data].Date}</Text>
      
        </View>
        <Text key={data} style={{color:"gray"}}>{u.Student_Comment[data].Msg}</Text>
        </View>
        {
          u.Student_Comment[data].Name===this.state.User?
          <TouchableOpacity onPress={()=>this.DeleteComment(u,u.Student_Comment[data],u.Student_Comment)} style={{right:3,position:'absolute'}}>
         <Ionicons  name="ios-close-circle" size={24} color="gray"/>
          </TouchableOpacity>:null
        }
         
          </View>
        )})}

        {
          

        Object.keys(this.Dynamic_Comment).map((d)=>
        {
          
      return    this.Dynamic_Comment[d].Client===u.User_Name?
       
        ////return krna he
  
        <View style={{flexDirection:"row"}}>
          <View>
            <View style={{flexDirection:'row'}}>
          <Text  style={{fontWeight:500,color:'black',marginLeft:3}}>{this.Dynamic_Comment[d].Name}</Text>
          <Text style={{color:'gray',fontSize:11,marginTop:2,marginLeft:5}}>{this.Dynamic_Comment[d].Time}</Text>
          <Text style={{color:'gray',fontSize:11,marginLeft:50,marginTop:2}}>{this.Dynamic_Comment[d].Date}</Text>
         
          </View>
          <Text style={{color:"gray"}}>{this.Dynamic_Comment[d].Msg}</Text>
          </View>
          {
         this.Dynamic_Comment[d].Name===this.state.User?
          <TouchableOpacity onPress={()=>this.DeleteComment(u,this.Dynamic_Comment[d],u.Student_Comment)} style={{right:3,position:'absolute'}}>
         <Ionicons  name="ios-close-circle" size={24} color="gray"/>
         </TouchableOpacity>:null}
          </View>
           :null
      
       })

        }
         <View style={{flexDirection:"row"}}>
  <View style={styles.TextInput}>
  <TextInput style={{width:'90%'}} placeholderTextColor="#455a64"  
  clearButtonMode="always" value={this.state.input} placeholder="Give FeedBack" onChangeText={this.setsearch}></TextInput>
        <TouchableOpacity  onPress={()=>this.sendComment(u,u.Student_Comment)}><Ionicons  name="ios-arrow-up" size={24} color="gray"/></TouchableOpacity>
  
  </View>
  </View></View> :null  
          } 
    </Card>
   
    
   
        
      
    );
     }))
     }
          
      </ScrollView>
          )
  }
  else if (this.props.Identity=="Teacher"){
   
    
    
    return(
      <ScrollView showsVerticalScrollIndicator={false}>
          { this.props.data.slice().reverse().map(((u, i) => {
           
          
     return (
      
    <Card  key={i}
    containerStyle={{borderWidth: 1, borderColor: '#1c313a', elevation: 0,width:320,borderRadius:10,shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2, }}
      title='Teacher'
      
     
>
      <Text>Teacher Name: {u.Teacher_Name}</Text>
      <Text>Desired Subject: {u.Desired_Subjects}</Text>
        <Text>Desired Class: {u.Desired_Class}</Text>
        <Text>Teacher Email: {u.Teacher_Email}</Text>
        

        <View style={{flexDirection:"row"}}> 
        {
        
        this.state.Like.includes(u.User_Name)===true 
        || u.Teacher_Notifications.includes(this.state.User)===true 
        ?
           <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.removeRowRef(u.User_Name,u.Teacher_Password,u.Teacher_Likes,u.Teacher_Notifications)}><Ionicons name="ios-heart" size={32} color="red" /></TouchableOpacity> 
        : 
          <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.storeRowRef(u.User_Name,u.Teacher_Password,u.Teacher_Likes,u.Teacher_Notifications)}><Ionicons name="ios-heart" size={32} color="#2979FF" /></TouchableOpacity> 

        
     
      }
      
      <TouchableOpacity style={{marginHorizontal:6}}onPress={() =>this.addComment(u.Teacher_Name)} ><Ionicons name="ios-chatbubbles" size={32} color="#2979FF" /></TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:6}} onPress={()=>this.ViewProfile(u.User_Name,u.Teacher_Password)}><Ionicons name="ios-contact" size={32} color="#2979FF" /></TouchableOpacity>
  
        </View>
    
         {
          this.state.Login.map((data,i)=>(
           
          data.User_Name===u.User_Name?
          
 <TouchableOpacity style={{height:20,width:20,borderRadius:25/2,backgroundColor:'green',right:3,top:3,position:'absolute'}}onPress={() =>this.checklogin(u.Teacher_Name)}>
          </TouchableOpacity>:null 
   
          
          ))
        }
        <TouchableOpacity style={{marginLeft:12}}><Modal all={u} show={u.Teacher_Likes}data={u.Teacher_Notifications}/></TouchableOpacity>
        {
  
  this.state.Comment.includes(u.Teacher_Name)===true?
  <View>
  <Text style={{fontWeight:800,color:'black',marginLeft:3}}>FeedBacks</Text>
  {


        
  Object.keys(u.Teacher_Comment).map((data,index)=>{
   
  return( <View style={{flexDirection:"row"}}>
  <View>
    <View style={{flexDirection:'row'}}>
  <Text key={data} style={{fontWeight:500,color:'black',marginLeft:3}}>{u.Teacher_Comment[data].Name}</Text>
  <Text key={data} style={{color:'gray',fontSize:11,marginLeft:5}}>{u.Teacher_Comment[data].Time}</Text>
  <Text key={data} style={{color:'gray',fontSize:11,marginLeft:50}}>{u.Teacher_Comment[data].Date}</Text>

  </View>
  <Text key={data} style={{color:"gray"}}>{u.Teacher_Comment[data].Msg}</Text>
  </View>
  {
    u.Teacher_Comment[data].Name===this.state.User?
    <TouchableOpacity onPress={()=>this.DeleteComment(u,u.Teacher_Comment[data],u.Teacher_Comment)} style={{right:3,position:'absolute'}}>
   <Ionicons  name="ios-close-circle" size={24} color="gray"/>
    </TouchableOpacity>:null
  }
      
        </View>
 )})}
 { Object.keys(this.Dynamic_Comment).map((d)=>
        {
         
      return    this.Dynamic_Comment[d].Client===u.User_Name?
       
        ////return krna he
  
        <View style={{flexDirection:"row"}}>
          <View>
            <View style={{flexDirection:'row'}}>
          <Text  style={{fontWeight:500,color:'black',marginLeft:3}}>{this.Dynamic_Comment[d].Name}</Text>
          <Text style={{color:'gray',fontSize:11,marginTop:2,marginLeft:5}}>{this.Dynamic_Comment[d].Time}</Text>
          <Text style={{color:'gray',fontSize:11,marginLeft:50,marginTop:2}}>{this.Dynamic_Comment[d].Date}</Text>
         
          </View>
          <Text style={{color:"gray"}}>{this.Dynamic_Comment[d].Msg}</Text>
          </View>
          {
         this.Dynamic_Comment[d].Name===this.state.User?
          <TouchableOpacity onPress={()=>this.DeleteComment(u,this.Dynamic_Comment[d],u.Teacher_Comment)} style={{right:3,position:'absolute'}}>
         <Ionicons  name="ios-close-circle" size={24} color="gray"/>
         </TouchableOpacity>:null}
          </View>
           :null
      
       })

        }
   <View style={{flexDirection:"row"}}>
<View style={styles.TextInput}>
<TextInput style={{width:'90%'}} value={this.state.input} placeholderTextColor="#455a64"  clearButtonMode="always"placeholder="Give FeedBack" onChangeText={this.setsearch}></TextInput>
  <TouchableOpacity  onPress={()=>this.sendComment(u,u.Teacher_Comment)}><Ionicons  name="ios-arrow-up" size={24} color="gray"/></TouchableOpacity>

</View>
</View></View> :null    
       } 
    </Card>
    
    
        
      
    );
    }))
    }
          
      </ScrollView>
          )
      
       
  }
 
  
}
}
const styles = StyleSheet.create({
  TextInput:{
    backgroundColor:'transparent' ,
    marginVertical:3,
   marginLeft:3,
    borderWidth:1,
    borderColor:"#455a64",
    justifyContent: 'space-between',
    width:250,
    height:35,
    flexDirection:'row',
    borderRadius:10,
    padding:5
  }
})
    
  
