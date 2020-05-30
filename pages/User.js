import React from 'react';
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from 'react-native'

export default class UserPage extends React.Component {

    render() {
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