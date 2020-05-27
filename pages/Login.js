import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import { useForm } from "react-hook-form";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function LoginPage() {

  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = data => Alert.alert("Form Data", JSON.stringify(data));

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
      ><Text style={{ color : 'white', fontSize:50, fontWeight:'bold'}}>Login</Text></View>
      <Text>Email</Text>
      <TextInput
        style={{ height: 40, width : 200, borderColor: 'grey', borderWidth: 1, backgroundColor : 'white', borderRadius : 5}}
        onChangeText={text => setValue("email", text, true)}
      />
      {errors.email && <Text>This is required.</Text>}
      <Text>Password</Text>
      <TextInput
        style={{ height: 40, width : 200, borderColor: 'grey', borderWidth: 1, backgroundColor : 'white', borderRadius : 5 }}
        secureTextEntry={true}
        onChangeText={text => setValue("password", text, true)}
      />
      {errors.password && <Text>This is required.</Text>}
      <Button title='Valider' onPress={handleSubmit(onSubmit)}/>
     
    </View>
  );


}