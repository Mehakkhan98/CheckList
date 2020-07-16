import React,{Component} from 'react';
import axios from 'axios';
import { Text, View, TouchableOpacity ,Slider} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import StudentCard from './Cards';
import {AsyncStorage} from 'react-native';
// import Slider from './Range';
import { getDistance, getPreciseDistance } from 'geolib';
import { Ionicons } from "@expo/vector-icons";

export default class myClass extends Component {
    constructor(props)
    {
        super(props);
        this.Likes = [];
        this.state={
            isLoading:true,
            dataSource:[],
            OwnData:[],
            Like:[],
            alldata:true,
            User:'',
           
          


        }
    }
     componentDidMount=async ()=>
     {
        try {
            const value = await AsyncStorage.getItem('User_Name');
            if (value !== null) {
              // We have data!!
              this.setState({User:value})
             
             
            }
          } catch (error) {
            alert("Error in session")
          }
        
         if(this.props.data=="Teacher")
         {
           
            const newTodo = {
                User_Name:this.state.User
                
              };
        
            
               axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_UserName',newTodo)
                    
                    .then(
                        (response2) => {
                            const person=response2.data
                            this.setState({
                                OwnData:person,
                               
                            })
                            }),() => { console.log(this.state.OwnData) }
                            
                            this.displayTeacher();
                        //  this.CheckStudentList()
         }
        if(this.props.data=="Student")
        {
         
            
           
            
            const newTodo = {
                User_Name:this.state.User
                
              };
        
            
               axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_UserName',newTodo)
                    
                    .then(
                        (response2) => {
                            const person=response2.data
                            this.setState({
                                OwnData:person,
                                
                            })
                            }),() => { console.log(this.state.OwnData) }
                            this.displayStudent();  
                         //   this.CheckTeacherList()
        }
       
     }
     displayStudent=async=>{
        
        let response = axios.get('http://192.168.8.103:4000/online_tutor_db/sdata')
        
        .then(
            (response2) => {
                const person=response2.data
                this.setState({
                  isLoading:false,
                  dataSource:person
                })
            }
           
                
                
        )
        .catch(err => console.log('err is', err));
        return response
       
        }
        displayTeacher=async=>{
        
            let response = axios.get('http://192.168.8.103:4000/online_tutor_db/')
            
            .then(
                (response2) => {
                    const person=response2.data
                    this.setState({
                      isLoading:false,
                      dataSource:person
                    })
                }
               
                    
                    
            )
            .catch(err => console.log('err is', err));
            return response
           
            }
     
     CheckStudentList=()=>{
      
        this.state.dataSource.map((data)=>
        {
            if(data.Teacher_Notifications.includes(this.state.User)===true)
          {
                 this.Likes.push(data) 
                 
          }
        
     })
     }
     CheckTeacherList= ()=>{
       
      
        this.state.dataSource.map((data)=>
        {
                
          
            
            
            if(data.Student_Notifications.includes(this.state.User)===true)
            {
           this.Likes.push(data)
          
            }
            
        }
        )
     }
 
render()
{
   
    if(this.state.isLoading===true)
    {
        return(
            <View>
                <ActivityIndicator animating={true} color="#0c95b2" size={48}/>
                <Text>The server is off</Text>
            </View>
            
        )
   
    }
    else if(this.props.data=="Teacher") {
       
    
        return(

          
            <View>
                <View style={{flexDirection:'row',right:5,marginTop:3}}>
               {
                   this.CheckStudentList()
               }
        {this.Likes.length!==0?<StudentCard data={this.Likes} Identity="Teacher"/>:<Text>Favourite List is Empty</Text>}  
               
             
  
       
              
     </View>
            </View>
            
        )
        
    }
    else if(this.props.data=="Student") {
     
       
        return(
            <View>
                <View style={{flexDirection:"row",right:5,marginTop:3}}>
         
                {
                   this.CheckTeacherList()
               }
        {this.Likes.length!==0?<StudentCard data={this.Likes} Identity="Student"/>:<Text>Favourite List is Empty</Text>}  
               
          

                
               
           </View>
            </View>
            
        )
        
    }
}

}
