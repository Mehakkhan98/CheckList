/*Example to make a call from the React Native App*/
import React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity 
} from 'react-native';
import call from 'react-native-phone-call';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
 
  call = () => {
    //handler to make a call
    const args = {
      number: this.props.data,
      prompt: false,
    };

    call(args).catch(console.error);
   
  };
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity  onPress={this.call}>
       <Ionicons name="ios-call" size={32} color="red"/> 
       <Text style={{ color:"#696969"}}>Call</Text>
        </TouchableOpacity>
        {/* <Button title="Make a Call" onPress={this.call} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  //  backgroundColor: '#ffffff',
  },
});
