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
            userLat:0,
            userLang:0,
            alldata:true,
            range:0,
            User:'',
            Near:[],
            Filtered:false


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
            this.displayTeacher();  
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
        if(this.props.data=="Student")
        {
         
            
            this.displayStudent();
            
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
       
     }
     FilteredRecord=(data)=>{
        this.setState({alldata:false})
         this.setState({range:data})
         this.state.OwnData.map((data)=>{
            this.setState({userLat:data.Lat})
            this.setState({userLang:data.Lang})
          })
         this.state.dataSource.map((data)=>{
            var dis = getDistance( ///// dis is in meter
                { latitude: this.state.userLat, longitude: this.state.userLang },
                { latitude: data.Lat, longitude: data.Lang }
              );
             console.log("Data you should Manage!",Math.trunc(dis / 1000),"and",this.state.range)
              if(Math.trunc(dis / 1000)===this.state.range)
              {
                //   this.Likes.push(data);
                // var joined = this.state.Near.concat(data);
                // this.setState({ Near: joined })
                
                this.setState({Filtered:true})

                let filteredPerson = this.state.Near.filter(like => like.User_Name !== data.User_Name);
                this.setState({
                  Near: [...filteredPerson, data]
                })    
                 
              }
          
             
              
           
         })
       

     }
     displayStudent=async=>{
        
        let response = axios.get('http://192.168.8.101:4000/online_tutor_db/sdata')
        
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
        
            let response = axios.get('http://192.168.8.101:4000/online_tutor_db/')
            
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
               
               <Slider minimumValue={1}
    maximumValue={12}
    thumbTintColor={'white'}
    handleBorderWidth={1}
    step={0.5}
    handleBorderColor="#454d55"
    style={{ flex: 1, height: 50, padding: 5 }}
    onValueChange={ this.FilteredRecord }></Slider>
  
      <TouchableOpacity style={{marginLeft:20,marginTop:10}}onPress={() =>this.setState({alldata:true,Filtered:false})}><Ionicons name="ios-chatbubbles" size={32} color="#2979FF" /></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
   <Text style={{color:'red',fontSize:9}}>0 km</Text>
        <Text style={{color:'red',fontSize:9,marginLeft:122}}>{this.state.range}Km</Text>
    <Text style={{color:'red',fontSize:9,marginLeft:102}}>12 Km</Text></View> 
    
              {this.state.alldata===true?<StudentCard data={this.state.dataSource} Identity="Teacher"/>:null}  
              {this.state.alldata===false && this.state.Filtered===true?<StudentCard data={this.state.Near} Identity="Teacher"/>:null} 
     
            </View>
            
        )
        
    }
    else if(this.props.data=="Student") {
        return(
            <View>
                <View style={{flexDirection:"row",right:5,marginTop:3}}>
              <Slider minimumValue={1}
    maximumValue={12}
    thumbTintColor={'white'}
    handleBorderWidth={1}
    step={0.5}
    handleBorderColor="#454d55"
    style={{ flex: 1, height: 50, padding: 5 }}
    onValueChange={this.FilteredRecord}></Slider>
   
      <TouchableOpacity style={{marginLeft:20,marginTop:8}}onPress={() =>this.setState({alldata:true})} ><Ionicons name="ios-chatbubbles" size={32} color="#2979FF" /></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}><Text  style={{color:'red',fontSize:9}}>0 Km</Text>
        <Text style={{color:'red',fontSize:9,marginLeft:122}}>{this.state.range}Km</Text>
    <Text  style={{color:'red',fontSize:9,marginLeft:102}}>12 Km</Text></View>
    
                {this.state.alldata===true?<StudentCard data={this.state.dataSource} Identity="Student"/>:null}  
                {this.state.alldata===false && this.state.Filtered===true?<StudentCard data={this.state.Near} Identity="Student"/>:null}
            </View>
            
        )
        
    }
}

}
