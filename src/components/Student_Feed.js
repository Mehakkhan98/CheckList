import * as React from 'react';
import { View, Text, Button ,TouchableOpacity,Image, Dimensions,Alert} from 'react-native';

export default function Student_Feed({ navigation }) {
    return (
       <View style={{ flexDirection: 'row' ,paddingTop:18,paddingLeft:10,top:5}}>
          <TouchableOpacity style={{}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          
            <MaterialCommunityIcons name="menu" color='white' size={32} />
           
          </TouchableOpacity>
          
          
          
       
    
     </View>
    );
  } 