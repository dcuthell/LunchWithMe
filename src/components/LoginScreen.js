
import React from 'react'
import { Navigation, StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import ForgottenPasswordScreen from './ForgottenPasswordScreen'
import SignupScreen from './SignupScreen'

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>I am Login Screen</Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Go to Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Go to Forgot Password
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Pretend we logged in
        </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color: 'gray'
  }
})
