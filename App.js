import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import HomePage from './pages/Home'

export default class App extends React.Component {
  
  render()
  {
    return (
      <View style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={{ uri: 'https://docs.snapchat.com/static/7619bf5537237fa6abac3ddcfc1d379b/55a47/ghostlogo%402x.png' }} style={{ width: 70, height: 70 }} />)
        <View style={{flexDirection : "row"}}>
        <Button 
          title="Login"
        />
         <Button
          title="Register"
          onPress={() =>
            this.props.navigation.navigate('Register')
          }
        />
        </View> 
      </View>
    );
  }
  
}


