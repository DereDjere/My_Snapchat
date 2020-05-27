import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default class HomePage extends React.Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View><Image source={{ uri: 'https://docs.snapchat.com/static/7619bf5537237fa6abac3ddcfc1d379b/55a47/ghostlogo%402x.png' }} style={{ width: 70, height: 70 }} /></View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Login"
            onPress={() => navigate('LoginPage')}
          />
          <Button
            title='Register'
            onPress={() => navigate('RegisterPage')}
          />
        </View>
      </View>
    )
  }
}