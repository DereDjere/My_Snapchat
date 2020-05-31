import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class UserPage extends React.Component {

   render(){
    const { navigate } = this.props.navigation;
       return(
           
        <View style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button
              title='Friends'
              onPress={() => navigate('GetUserPage')}
            />
          </View>
       )
   }
}