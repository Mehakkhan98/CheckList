import React, { Component } from 'react';
import { View, TextInput, Linking,Text, Button, StyleSheet, Clipboard,TouchableOpacity} from 'react-native';
// import Toolbar from './toolbar';
import { Ionicons } from '@expo/vector-icons';
const digitsPattern = /^\d+$/

class whatsapp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: this.props.data,
      clipboardContent: ''
    }
  }

  componentDidMount() {
    this.readFromClipboard();
  }

  readFromClipboard = async () => {   
    const content = await Clipboard.getString();
    if (digitsPattern.test(content)) {
      this.setState({
        clipboardContent: content,
      })
    }
  };

//   pasteFromCBText = async () => {
//     const content = await Clipboard.getString();   
//     if (digitsPattern.test(content)) {
//       this.setState({
//         clipboardContent: content,
//         inputText: content
//       })
//     } else {
//       ToastAndroid.show('Clipboad empty or Invalid content', ToastAndroid.SHORT);
//       this.setState({
//         clipboardContent: ''
//       })
//     }  
//   }

  render() {
    return (
     
       
       
          <View style={styles.container}>
          <TouchableOpacity   disabled={this.state.inputText === ''}  onPress={() => { Linking.openURL('https://api.whatsapp.com/send?phone=' +'92'+ this.state.inputText)}}>
        <Ionicons name="md-chatbubbles" size={32} color="red"/>
        <Text style={{ color:"#696969"}}>whatsapp</Text>
        </TouchableOpacity>
            
          </View>
        
     
    )
  }
}

const baseStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  //  backgroundColor: '#ffffff',
  },
  
}
const styles = StyleSheet.create(baseStyles);

export default whatsapp