import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import UserPage from './pages/User'

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    HomePage: { screen: HomePage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    RegisterPage: { screen: RegisterPage },
    LoginPage: { screen: LoginPage },
    UserPage: { screen: UserPage },
  },
  {
    initialRouteName: 'HomePage',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
        swipeEnabled : false,
    }
  }
);

export default createAppContainer(App);


