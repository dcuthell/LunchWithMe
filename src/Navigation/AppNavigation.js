import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/Login'
import { Text } from 'react-native'
import SplashScene from '../components/SplashScene'
import MapScene from '../components/MapScene'
import Appointment from '../components/Appointment'
import LoginScreen from '../components/LoginScreen'

const DrawerStack = DrawerNavigator({
  SplashScene: { screen: SplashScene },
  MapScene: { screen: MapScene },
  AppointmentScene: { screen: Appointment },
})

const DrawerNavigation = StackNavigator ({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Welcome!',
    headerTintColor: 'white',
    headerLeft: <Text onPress={() =>
    navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  SplashScene: { screen: SplashScene },
  // forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'Splash Screen',
  initialRouteName: 'drawerStack'
})

export default PrimaryNav
