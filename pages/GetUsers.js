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
        alert(this.state.token)
        const getUsers = fetch("http://snapi.epitech.eu/all", {
            method: "GET",
            headers: {
                "token": this.state.token
            }
        }).then(response => response.json())
        .then(response => {
            // console.log(response)
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
                <Button
                    title='Send Snap'
               />
            </View>
        )
    }

}