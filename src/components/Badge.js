import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

// Standard badge
export default class Profile extends Component {
    render()
    {
        return(
            <View>
<Badge value="5+"  fontSize={24}  status="error" />

</View>

    );
  }
}
           
    
