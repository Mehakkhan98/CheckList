import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button,Alert} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    state = {
      data: null,
    };
  _pickDocument = async () => {
    console.log("Reached in function")
        let result = await DocumentPicker.getDocumentAsync("*/*")
        if(result=="undefined"||result==null|| result.type=="cancel")
        {
            alert("Nothing Selected");
        }
        else{
            alert(result.uri);
            this.setState({data:result.name})
        }
		 
      console.log(result);
     
	}

   
 deleteItem=()=>{
    if(this.state.data!=null){Alert.alert(
       
        'Delete Information',
       
        'Do You Really want to Delete',                               
        [
          {text: 'Yes', onPress: () =>   this.setState({data:null})},
          {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
         
        ],
        { cancelable: false }); 
    }
    else{
        alert("You have Nothing To Delete")
    }
   
 }

  render() {
    return (
      <View style={styles.container}>
          <Ionicons onPress={this.deleteItem} name="ios-trash" size={32} color="black"/>
        <Button
      
         title={this.state.data!=null?this.state.data:this.props.text} 
          onPress={this._pickDocument}
        />

     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    marginHorizontal:60,
    flexDirection:'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
