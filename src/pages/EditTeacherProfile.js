
import React, { Component } from 'react';

import NavBarEditScreen from '../components/NavBarEditScreen';


export default class Profile extends Component {
 

  render()
 {
   return(
    <NavBarEditScreen data="Teacher"/>
   );
  
//   console.log("Required data is",this.state.dataSource)
//   if(this.state.dataSource==null)
//   {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
//       <ActivityIndicator animating={true} color="#0c95b2" size={48}/>
//       <Text>Server is OFF </Text>
     
//     </View>
      
//     )
//   }
//   return  this.state.dataSource.map((data,i) => {
//     console.log("Required data is",data.Teacher_Experience)
//   return (
 
//      <View style={{flex:1}} key={i}>
  
//   <View style={{flexDirection: 'row',backgroundColor: Background, height:60,paddingTop:18,paddingLeft:10,top:5}}>
//         <TouchableOpacity onPress={()=> Actions.T_home()}>
//         <Ionicons name="ios-arrow-back" size={32} color="white"/>
//         </TouchableOpacity>

//         </View>
 
       
         
      
//          <View style={styles.body}> 
//              <View style={styles.bodyContent}> 
       
//        <TextInput style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setName} placeholder={data.Teacher_Name} />
       
//        <TextInput style={styles.info}  placeholderTextColor="#455a64" onChangeText={this.setspecification} placeholder={data.Teacher_Qualification=="Not Define"||null?"Enter Your Specifications": data.Teacher_Qualification
// }/>

// </View> 
//  </View> 
 
// <View  style={styles.borderline}>
// </View>
// <KeyboardAvoidingView   keyboardVerticalOffset = {-500} // adjust the value here if you need more padding
//   style = {{ flex: 1 }}
//   keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} >
// <ScrollView>
// <View    style={styles.container}>
// <View  style={styles.description}>

// <Ionicons name="ios-mail" size={32} color="black"/>

// <TextInput   style={styles.name} placeholderTextColor="#455a64" onChangeText={this.setmail}  placeholder={data.Teacher_Email=="Not Define"||null?"Enter Email address":data.Teacher_Email}  /> 

// </View>
// <View  style={styles.description}>

// <Ionicons name="ios-call" size={32} color="black"/>

// <TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setphone} placeholder={data.Teacher_Phone=="Not Define"||null?"Enter Phone#":data.Teacher_Phone}  />   

// </View>
// <View  style={styles.description}>
// <Ionicons name="ios-home" size={32} color="black"/>

// <TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setaddress} placeholder={data.Teacher_Adress=="Not Define"||null?"Enter Home address":data.Teacher_Adress} />  

// </View>
// <View style={styles.description}>
//   <CityPicker/>
//   </View>

//   <View style={styles.description}>
//     <Subjects data="Teacher"/>
//   </View>
//   <Gender Id="Teacher"/> 
 
  
// <Fee Id="Teacher"/> 
// <View  style={styles.description}>
// <Ionicons name="ios-book" size={32} color="black"/>

// <TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setExperience} placeholder={data.Teacher_Experience=="Not Define"||""?"Enter your Experience":data.Teacher_Experience} />  

// </View>

// <View  style={styles.description}>
// <Ionicons name="ios-information-circle" size={32} color="black"/>

// <TextInput   style={styles.name}  placeholderTextColor="#455a64" onChangeText={this.setInfo} placeholder={data.Teacher_Info=="Not Define"||null?"Info about Teacher":data.Teacher_Info} />  

// </View>



// <View  style={styles.description}>

// <PickDocument text="Upload Cnic"/>
// </View>
// <View  style={styles.description}>
// <PickDocument text="Upload Cv"/>
// </View>

// <View  style={styles.description}>

// <PickDocument text="Upload Cover Letter"/>
// </View>
// <View  style={styles.description}>


// <PickDocument text="Upload Recent Degree"/>
// </View>

// <View  style={styles.description}>
// <PickDocument text="Upload  Experience Letter"/>
// </View>




// <View  style={{ justifyContent: 'center',flexDirection:'row',marginLeft:10}}> 



  
  
  
// </View>
// </View>
// </ScrollView>
//         </KeyboardAvoidingView>

              
       
//         <View style={{ alignItems:'center',marginTop:10}}><CustomButton onPress={this.askfortution} text="Save"/></View>
        
       
//         </View>  
            
     
//     );
//    }) 
 }
}



