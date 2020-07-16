import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Boldtext(props) 
{
    return(
    <Text>{props.text}</Text>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    boldText:{
        color:'#455a64',
        fontSize:18,
        fontWeight:'500',
        paddingTop:10,
        marginBottom:70,
        marginTop:15
    }
        
       
    
    
  });