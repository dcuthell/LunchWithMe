
import React from 'react'
import { Navigation, StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Login Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
