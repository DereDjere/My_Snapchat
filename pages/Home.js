import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class HomePage extends React.Component {

  constructor() {
    super()
    this.state = { data: [] }

  }

  async componentDidMount() {
    try {
      const response = await AsyncStorage.getItem('token');
      this.setState({ data: response })
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    const onLogout = async () => {
      try {
        await AsyncStorage.removeItem('token')
      }
      catch (errors) {
        console.log(errors)
      }
      navigate('HomePage')
    }
    console.log(this.state.data)
    if (this.state.data != null) {
      return (
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            title='Send Snap'
          />
          <Button
            title='Logout'
            onPress={onLogout}
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