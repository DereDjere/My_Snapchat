import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class HomePage extends React.Component {




  render() {
    const { navigate } = this.props.navigation;
    // displayData = async ()=>{  
    // let user = await AsyncStorage.getItem('userData');

    // let parsed = JSON.parse(user);



    // }
    
    // if (parsed.token !== '' || parsed.token !== null) {
    //     console.log('zebiiiii');

    // } else {

//       displayData = async ()=>{  
//     try{  
//       let user = await AsyncStorage.getItem('token');  
//       // let parsed = JSON.parse(user);  
//       // alert(user);
//       if(user !== null){
//       // alert(user);

//         return true;
//       }
//     }  
//     catch(error){  
//       alert(error)  
//     }  
//   }  
// if(displayData() == true){
  
//   return (
    
//     // navigate('RegisterPage')
//     // <View>
//     //   <Button title="TEST"></Button>
//     // </View>
    

//     <View style={{
//       backgroundColor: 'yellow',
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <View><Image source={{ uri: 'https://docs.snapchat.com/static/7619bf5537237fa6abac3ddcfc1d379b/55a47/ghostlogo%402x.png' }} style={{ width: 70, height: 70 }} /></View>
//       <View style={{ flexDirection: "row" }}>
//         <Button
//           title="Login"
//           onPress={() => navigate('LoginPage')}
//         />
//         <Button
//           title='Register'
//           onPress={() => navigate('RegisterPage')}
//         />
//       </View>

//     </View>

//   )
// }else{

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

  // }
// }