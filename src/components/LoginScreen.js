
import React from 'react'
import { Navigation, StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import ForgottenPasswordScreen from './ForgottenPasswordScreen'
import SignupScreen from './SignupScreen'
import Login from './Login'

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../images/lunchwithlogo_small.png')} />

      <View>
          <Text
            style={styles.linky}
            onPress={() => this.props.navigation.navigate('signupScreen')} >
            Signup
          </Text>

          <Text
            style={styles.linky}
            onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
               Forgot Password
          </Text>
          <Text
            style={styles.linky}
            onPress={() => this.props.navigation.navigate('login')} >
            Login
          </Text>
          <Text
            style={styles.linky}
            onPress={() => this.props.navigation.navigate('drawerStack')} >
            "Logged In"
          </Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42b3f4',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color: 'gray',
  },
  linky: {
    fontFamily: 'Avenir',
    fontSize: 14,
    color: 'white',
    justifyContent: 'center'
  },
  logo: {
    marginTop: 200,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  }
})
