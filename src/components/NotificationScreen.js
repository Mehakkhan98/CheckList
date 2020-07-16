import  React,{Component} from 'react';
import axios from 'axios';
import { Text, View ,TouchableOpacity,Alert,Image,StyleSheet,FlatList,Switch, Button} from 'react-native';
import {AsyncStorage} from 'react-native';
import CustomButton from '../components/Button';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native';


export default class ViewTeacherProfile extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          User:'',
          Password:'',
          dataSource:[],
          name:''

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
     if(this.props.client=="Teacher")
     {

     
     const newTodo = {
        User_Name:this.state.User,
        Teacher_Password:this.state.Password,
        
      };

      let response = axios.post('http://192.168.8.100:4000/online_tutor_db/single_Teacher',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                        dataSource:person
      
      
      

                    })
                    })
                }
        if(this.props.client=="Student")
        {
            const newTodo = {
            User_Name:this.state.User,
        Student_Password:this.state.Password,
        
      };

      let response = axios.post('http://192.168.8.100:4000/online_tutor_db/single_Student',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                        dataSource:person
      
      
      

                    })
                    })
        }

   };
   FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#000",
          color:"#455a64",
         //  marginLeft:20
        }}
      />
    );
  }
   
  render()
  {
      if(this.state.dataSource.length===0)
      {  
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
            <ActivityIndicator animating={true} color="#0c95b2" size={48}/>
            <Text>Server off</Text>
           
          </View>
            
          )
      } 
      if(this.props.client=="Teacher")
        {
     if(this.props.category===true){
      return  this.state.dataSource.map((data,i) => {
     
        return  data.Teacher_Comment.slice().reverse().map((d)=>{
        
            return (
    
              <View style={{marginBottom:25,marginTop:10}}>
                <TouchableOpacity onPress={()=> Actions.Display_TImage()}>
                <View style={{flexDirection:'row'}}>
                  <View>
                <Image style={styles.avatar1}  source={require("../Images/profile.png")}/>
                </View>
                <View>
            <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d.Date}_{d.Time}</Text>
   <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d.Name} has commented on your Profile</Text>
   </View>
   
                </View>
                </TouchableOpacity>
               
                <Text style={{color:'gray',marginLeft:10}}>_____________________________________________________</Text></View>
                
            );
                });
          })
     }
   else{
    return  this.state.dataSource.map((data,i) => {
     
      return  data.Teacher_Notifications.slice().reverse().map((d)=>{
      
          return (
  
            <View style={{marginBottom:25,marginTop:10}}>
              
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={()=> Actions.Display_TImage()}>
                <View>
                <Image style={styles.avatar1}  source={require("../Images/profile.png")}/>
                </View>
            <View>
            <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d} has Like your Profile</Text>
 <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>Congratulations! Your Id is Getting Hits</Text>
            </View>
            </TouchableOpacity>
              </View>
             
             
              <Text style={{color:'gray',marginLeft:10}}>_____________________________________________________</Text></View>
              
          );
              });
        })
   }

        
 
    }

    if(this.props.client=="Student")
    if(this.props.category===true)
    {

        return  this.state.dataSource.map((data,i) => {
      
      return  data.Student_Comment.slice().reverse().map((d)=>
    
        {
         
          
            return (
             
            <View style={{marginBottom:5}}>
                <TouchableOpacity onPress={()=> Actions.Display_Image()}>
              <View style={{flexDirection:'row',marginTop:20}}>
            
        <View>
           <Image style={styles.avatar1}  source={require("../Images/profile.png")}/>
           </View>
           <View>
           <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}> {d.Date}_{d.Time}</Text>
           <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d.Name} has Comment on your Profile</Text>
            
           </View>
             
              </View>
              </TouchableOpacity>
             
            <Text style={{color:'gray',marginLeft:10}}>_____________________________________________________</Text></View>
         
       
           );
            
              });

            
         })
       
      
    }
    else{
      return  this.state.dataSource.map((data,i) => {
       
        return  data.Student_Notifications.slice().reverse().map((d)=>
      
          {
           
            
              return (
               
              <View style={{marginBottom:5}}>
                 
                <View style={{flexDirection:'row',marginTop:20}}>
                <TouchableOpacity onPress={()=> Actions.Display_Image()}>
          <View>
          <Image style={styles.avatar1}  source={require("../Images/profile.png")}/>
          </View>
            
     <View>
         <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>{d} has Like your Profile</Text>
        <Text style={{color:'gray',fontSize:12,marginLeft:60,marginTop:5}}>Congratulations! Your Id is Getting Hits</Text>
     </View>
     </TouchableOpacity>
                </View>
               
               
              <Text style={{color:'gray',marginLeft:10}}>_____________________________________________________</Text></View>
           
         
             );
              
                });
  
              
           })
         
    }
    
      
    }    
           
}
const styles = StyleSheet.create({
        
         image: { width: 200, height: 200, backgroundColor: 'gray',marginTop:5,marginLeft:50,borderRadius:100 },
         item: {
         
          paddingVertical:18,
          fontSize: 16,
          height: 40,
          color:"#455a64",
          paddingHorizontal:10
          
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
