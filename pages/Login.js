import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, AsyncStorage } from 'react-native';
import { useForm } from "react-hook-form";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from "./Home";



export default function LoginPage({ navigation : { navigate}}) {

  const { register, setValue, handleSubmit, errors } = useForm();
  // const onSubmit = data => Alert.alert("Form Data", JSON.stringify(data));

  // useEffect(() => {
  //   register({ name: "email" }, { required: true });
  //   register({ name: "password" }, { required: true });
  // }, [register]);

  onSubmit = async (data) => {
    
    const response = await fetch('http://snapi.epitech.eu/connection', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.data.token === undefined)
          console.log('false')
        else {
          async () => {
            try {
              await AsyncStorage.setItem("token", response.data.token);
            }
            catch(error)
            {
              console.log(error)
            }
          }
          navigate('UserPage')
        }
      })

    // .then((response) => {
    //   console.log(response);
    // //  AsyncStorage.setItem('userData', response.data.token)
    // //  let user = AsyncStorage.getItem('userData');  
    // //  console.log('success :' + user);  



    //   // return navigate('HomePage')

    // })
  }
  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);


  // displayData = async () => {
  //   try {
  //     let user = await AsyncStorage.getItem('userData');
  //     let parsed = JSON.parse(user);
  //     console.log('success :' + parsed.token);

  //     alert(parsed.token);
  //   }
  //   catch (error) {
  //     alert(error)
  //   }
  // }
  const displayData = async () => {
    var found = false;
    let user = await AsyncStorage.getItem('token');
    
    if (user !== null) {
      found = true
    }
    return found
  }
  console.log('test')
  if (displayData == true) {
    console.log('testttt')
  } else {
    return (


      <View style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }}>

        <View style={{
          margin: 30
        }}

        ><Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>Login</Text></View>
        <Text>Email</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'grey', borderWidth: 1, backgroundColor: 'white', borderRadius: 5 }}
          onChangeText={text => setValue("email", text, true)}
        />
        {errors.email && <Text>This is required.</Text>}
        <Text>Password</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'grey', borderWidth: 1, backgroundColor: 'white', borderRadius: 5 }}
          secureTextEntry={true}
          onChangeText={text => setValue("password", text, true)}
        />
        {errors.password && <Text>This is required.</Text>}
        <Button title='Valider' onPress={handleSubmit(onSubmit)} />

      </View>
    )


  }



}