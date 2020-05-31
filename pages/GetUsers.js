import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class GetUsersPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            token: "",
            usersSnap: []
        };

    }

    async componentDidMount() {
        let tokenUser = await AsyncStorage.getItem("token")
        this.setState({token: tokenUser })
        const getUsers = fetch("http://snapi.epitech.eu/all", {
            method: "GET",
            headers: {
                "token": "U3LjaGHqBJNrhtxkoiGWQWJq"
            }
        }).then(response => response.json())
        .then(response => {
            console.log(response)
             this.setState({usersSnap: response})
        })
        

        
    }

    render() {
        console.log(this.state.usersSnap)
        return (
        
            <View
                style={{
                    backgroundColor: 'yellow',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            <Text>{this.state.usersSnap} </Text>
            </View>
        )
    }

}