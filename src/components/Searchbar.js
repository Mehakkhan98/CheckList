import  React,{Component} from 'react';
import axios from 'axios';
import { Text, View ,TouchableOpacity,Alert,StyleSheet,Button,TextInput} from 'react-native';
import {AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getDistance, getPreciseDistance } from 'geolib';
import StudentCard from './Cards';
import { Actions } from 'react-native-router-flux';
import Render from './RenderHomeData';
import { ScrollView } from 'react-native-gesture-handler';

export default class StudentHome extends Component {
  constructor(props)
  {
      super(props);
      this.state={
        isLoading:true,
          By_Name:true,
          By_Fee:false,
          By_loc:false,
          By_Subject:false,
          By_Gender:false,
          press:false,
          dis:false,
          userLat:'',
          userLang:'',
          dis2:false,
          input:'',
          dataSource:[],
          OwnData:[],
          Near:[],
          Password:'',
          Show:false,
          User_Name:''

      }
  }
   
    componentDidMount=async ()=>
    {
      this.WholeRecord();
      try {
        const value = await AsyncStorage.getItem('User_Name');
        if (value !== null) {
          // We have data!!
          this.setState({User_Name:value})
          console.log("Session Value from Home",value);
         
        }
      } catch (error) {
        alert("Error in session")
      }
      if(this.props.data=="Teacher")
      {
         
         console.log("user",this.state.User_Name)
         const newTodo = {
             User_Name:this.state.User_Name
             
           };
     
         
            axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_UserName',newTodo)
                 
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
      
         
      console.log("user",this.state.User_Name)
         
         const newTodo = {
             User_Name:this.state.User_Name
             
           };
     
         
            axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_UserName',newTodo)
                 
                 .then(
                     (response2) => {
                         const person=response2.data
                         this.setState({
                             OwnData:person,
                             
                         })
                         })
                        
        
     }
     
    
   }
   WholeRecord=()=>{
    if(this.props.data=="Student")
    {
     
      let response = axios.get('http://192.168.8.103:4000/online_tutor_db/')
            
      .then(
          (response2) => {
              const person=response2.data
              this.setState({
                Near:person,
                isLoading:false
               
              }),this.state.Near
          }
         
              
              
      )
      .catch(err => console.log('err is', err));
      
     
     
    }
    if(this.props.data=="Teacher")
    {
     
      let response = axios.get('http://192.168.8.103:4000/online_tutor_db/sdata')
        
      .then(
          (response2) => {
              const person=response2.data
              this.setState({
                Near:person,
                isLoading:false
             
              })
          } ,console.log(this.state.Near)
         
              
              
      )
      .catch(err => console.log('err is', err));
      
     
        }
   }
   Visibility=()=>{
 if(this.state.Show===false)
 {
   this.setState({Show:true})
 }
 else{
   this.setState({Show:false})
 }
   }
  
By_Name=()=>{
   this.setState({By_Name:true})
}
setsearch=(e)=>
{
  this.setState({input:e})
}
search=()=>{
 this.setState({press:true})
  if(this.state.By_Name==true)
  { 
    if(this.props.data=="Student")
    {

      const newTodo = {
        Teacher_Name:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_Name',newTodo)
            
            .then(
                (response2) =>{
                    const person=response2.data
                    console.log("search by name111111111",person)
                    this.setState({
                        dataSource:person,
                         dis2:true,
                       

         
      

                    })
                    })


     
               
    }
    if(this.props.data=="Teacher")
    {
      const newTodo = {
        Student_Name:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_Name',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    console.log("search by name111111111",person)
                    this.setState({
                        dataSource:person,
                         dis:true
      
      

                    })
                    })
    }
  }
  if(this.state.By_Fee==true)
  {
    if(this.props.data=="Student")
    {
      const newTodo = {
        Teacher_Fee_Range:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_Fee',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    console.log("search by name111111111",person)
                    this.setState({
                        dataSource:person,
                         dis2:true
      
      

                    })
                    })
    }
    if(this.props.data=="Teacher")
    {
      const newTodo = {
        Student_Fee_Range:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_Fee',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                    console.log("search by name111111111",person)
                    this.setState({
                        dataSource:person,
                         dis:true
      
      

                    })
                    })
    }
  }
  if(this.state.By_Subject==true)
  {
    if(this.props.data=="Student")
    {
      const newTodo = {
        Teacher_Qualification:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_Subject',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                  
                    this.setState({
                        dataSource:person,
                         dis2:true
      
      

                    })
                    })
    }
    if(this.props.data=="Teacher")
    {
      const newTodo = {
        Student_Class:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_Subject',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                   
                    this.setState({
                        dataSource:person,
                         dis:true
      
      

                    })
                    })
    }
  }
  if(this.state.By_loc==true)
  {
   
   
    if(this.props.data==="Student")
    {
     
      const newTodo = {
        Teacher_City:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_City',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                  
                    this.setState({
                        dataSource:person,
                         dis2:true
      
      

                    })
                    })
          
   


    }
    if(this.props.data==="Teacher")
   {
     
    const newTodo = {
      Student_City:this.state.input
      
    };

    let response = axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_City',newTodo)
          
          .then(
              (response2) => {
                  const person=response2.data
                 
                  this.setState({
                      dataSource:person,
                       dis:true
    
    

                  })
                  })
     
     }

    
     
     
    
  }
  if(this.state.By_Gender==true)
  {
   
   
    if(this.props.data==="Student")
    {
     
      const newTodo = {
        Teacher_Gender:this.state.input
        
      };

      let response = axios.post('http://192.168.8.103:4000/online_tutor_db/T_By_Gender',newTodo)
            
            .then(
                (response2) => {
                    const person=response2.data
                  
                    this.setState({
                        dataSource:person,
                         dis2:true
      
      

                    })
                    })
          
   


    }
    if(this.props.data==="Teacher")
   {
     
    const newTodo = {
      Student_Gender:this.state.input
      
    };

    let response = axios.post('http://192.168.8.103:4000/online_tutor_db/S_By_Gender',newTodo)
          
          .then(
              (response2) => {
                  const person=response2.data
                 
                  this.setState({
                      dataSource:person,
                       dis:true
    
    

                  })
                  })
     
     }

    
     
     
    
  }
//  this.setState({dis:true})
}
  render()
  {
   
 return(

<View style={{ alignItems:'center' ,backgroundColor:'white'}}>

  <View style={{top:40,right:4,position:"absolute",zIndex: 1}}>
    <ScrollView  showsVerticalScrollIndicator={false}>
{this.state.Show===false?
<View>
    <View style={{marginVertical:18,alignItems:"center",flexDirection:"column",zIndex: 1}}>
      <TouchableOpacity style={{paddingTop:10, borderWidth:2,borderColor:"gray",borderRadius:30,height:60,width:60,alignItems:"center",backgroundColor: 'transparent'}} onPress={() => {
            this.setState({By_Name:true,By_Fee:false,By_Subject:false,By_loc:false,By_Gender:false});
          }}>{this.state.By_Name==true?<Ionicons name="ios-person" size={32} color="red"/>: <Ionicons name="ios-person" size={32} color="gray"/>}</TouchableOpacity>
        {this.state.By_Name==true?<Text style={{color:'red'}}>By Name</Text>:null}
    </View>
     
  
   <View style={{marginVertical:18,alignItems:"center",flexDirection:'column', zIndex: 1}}>
   <TouchableOpacity  style={{paddingTop:10, borderWidth:2,borderColor:"gray",borderRadius:30,height:60,width:60,alignItems:"center",backgroundColor: 'transparent'}} onPress={() => {
           this.setState({By_Fee:true,By_Subject:false,By_Name:false,By_loc:false,By_Gender:false});
          }}>{this.state.By_Fee==true?<Ionicons name="ios-card" size={32} color="red"/>: <Ionicons name="ios-card" size={32} color="gray"/>}</TouchableOpacity>
  {this.state.By_Fee==true?<Text style={{color:'red'}}>By Fee</Text>:null}
     </View>
   
    <View style={{flex:1, marginVertical:18,alignItems:"center",}}> 
    <TouchableOpacity  style={{paddingTop:10, borderWidth:2,borderColor:"gray",borderRadius:30,height:60,width:60,alignItems:"center",backgroundColor: 'transparent'}} onPress={() => {
           this.setState({By_Subject:true,By_Name:false,By_Fee:false,By_loc:false,By_Gender:false});
          }}>{this.state.By_Subject==true?<Ionicons name="ios-book" size={32} color="red"/>: <Ionicons name="ios-book" size={32} color="gray"/>}</TouchableOpacity>
  {this.state.By_Subject==true&&this.props.data==="Student"?<Text style={{color:'red'}}>By Qualification</Text>:null}
  {this.state.By_Subject==true&&this.props.data==="Teacher"?<Text style={{color:'red'}}>By Class</Text>:null}
   
     </View>

   <View style={{flex:1, marginVertical:18 ,alignItems:"center"}}>
   <TouchableOpacity  style={{paddingTop:10, borderWidth:2,borderColor:"gray",borderRadius:30,height:60,width:60,alignItems:"center",backgroundColor: 'transparent'}} onPress={() => {
           this.setState({By_loc:true,By_Name:false,By_Fee:false,By_Subject:false,By_Gender:false});
          }}>{this.state.By_loc==true?<Ionicons name="ios-navigate" size={32} color="red"/>: <Ionicons name="ios-navigate" size={32} color="gray"/>}</TouchableOpacity>
  {this.state.By_loc==true?<Text style={{color:'red'}}>By City</Text>:null}
   
    </View>
    <View style={{flex:1, marginVertical:18 ,alignItems:"center"}}>
   <TouchableOpacity  style={{paddingTop:10, borderWidth:2,borderColor:"gray",borderRadius:30,height:60,width:60,alignItems:"center",backgroundColor: 'transparent'}} onPress={() => {
           this.setState({By_Gender:true,By_loc:false,By_Name:false,By_Fee:false,By_Subject:false});
          }}>{this.state.By_Gender==true?<Ionicons name="ios-contact" size={32} color="red" />: <Ionicons name="ios-contact" size={32} color="gray" />}</TouchableOpacity>
  {this.state.By_Gender==true?<Text style={{color:'red'}}>By Gender</Text>:null}
   
    </View>
    </View>:null}
    
    </ScrollView>
  </View>
  <View style={{flexDirection:"row"}}>
  <View style={styles.TextInput}>
  {/* //style={{top:10,position:"absolute", flexDirection: 'row'}}> */}
  <TextInput style={{width:'90%'}} placeholderTextColor="#455a64" placeholder={this.state.By_Name==true?"Search By Name":this.state.By_Subject==true?'Search By Class or Qualification':this.state.By_Fee==true?'Search by Fee':this.state.By_loc==true?'Search By City':this.state.By_Gender==true?'Search by Gender':null} onChangeText={this.setsearch}></TextInput>
        <TouchableOpacity  onPress={this.search}>{this.state.press==true?<Ionicons name="ios-search" size={28} color="black"/>:<Ionicons name="ios-search" size={28} color="gray"/>}</TouchableOpacity>
  
  </View>
  <TouchableOpacity style={{marginTop:10,marginLeft:10}} onPress={this.Visibility}>{this.state.Show===true?<Ionicons name="ios-eye"  size={32} color="gray"/>:<Ionicons name="ios-eye-off"  size={32} color="gray"/>}</TouchableOpacity>
  </View>
   {this.state.press==true&&this.state.dataSource.length===0?<Text style={{color:'red'}}>No relevent data</Text>:this.state.dis==true?<View style={{marginTop:10,backgroundColor:'white',marginBottom:5}}><StudentCard data={this.state.dataSource} Identity="Student"/></View>:this.state.dis2==true?<View style={{marginTop:10,backgroundColor:'white',marginBottom:5}}><StudentCard data={this.state.dataSource} Identity="Teacher"/></View>:null}  
 
  
 
</View>
);
 
 }
}
const styles = StyleSheet.create({
  container: {
   // flex: 1,
   // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    TextInput:{
      backgroundColor:'transparent' ,
      marginVertical:6,
     marginLeft:20,
      borderWidth:1,
      borderColor:"#455a64",
      justifyContent: 'space-between',
      width:310,
      height:40,
      flexDirection:'row',
      borderRadius:7,
      padding:8
    },
  
 
  buttonContainer: {
   
    flex: 1,
  }
});

  
 
 

