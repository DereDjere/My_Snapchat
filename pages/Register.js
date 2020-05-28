import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, TouchableHighlight } from 'react-native';
import { useForm } from "react-hook-form";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function RegisterPage({ navigation }) {

  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = function (data) {
    // console.log(data.email);
    // console.log(data.password);
    console.log(data)
    // fetch('http://snapi.epitech.eu/inscription', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password
    //   })
    // });
    fetch('http://snapi.epitech.eu/inscription', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
  .catch(error => console.error('Error: ', error))
  .then(response => console.log('Success: ', response))
  }
  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

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
      ><Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>Registration</Text></View>
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
  );


}