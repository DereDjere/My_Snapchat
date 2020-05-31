import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      usersSnap: []
    };

    VerifToken = async () => {
      let tokenUser = await AsyncStorage.getItem("token")
     
      this.setState({ token: tokenUser })
    }
    Logout = async () => {
      await AsyncStorage.removeItem("token")
      this.setState({ token: undefined })
      
    }
    VerifToken()
  }
  



  

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.token + ' TEST')
    
    if (this.state.token != undefined) {
      return (
        <View style={{
          backgroundColor: 'yellow',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button
            title='Friends'
            onPress={() => navigate('UserPage')}
          />
          <Button
            title='Logout'
            onPress={() => {
              Logout()
              VerifToken()
              navigate('HomePage')
            }}
          />
        </View>
      )
    }
    else {
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
}

  // }
// }