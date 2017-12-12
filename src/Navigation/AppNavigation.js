import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/Login'
import { Text, Animated, Easing, Button, View } from 'react-native'
import SplashScene from '../components/SplashScene'
import MapScene from '../components/MapScene'
import Appointment from '../components/Appointment'
import LoginScreen from '../components/LoginScreen'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = DrawerNavigator({
  SplashScene: { screen: SplashScene },
  MapScene: { screen: MapScene },
  AppointmentScene: { screen: Appointment },
}, {
  gesturesEnabled: false,
  contentComponent: () => <View style ={{ height: 150, width: 149, backgroundColor: '#bb8' }}/>
})

const DrawerNavigation = StackNavigator ({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Welcome!',
    // gesturesEnabled: false,
    headerLeft: (
      <Text
        onPress={() => {
          console.log(navigation);
          console.log("hello");
          navigation.navigate('DrawerOpen');
        }}
      >
        Menu
      </Text>
    )
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
  initialRouteName: 'drawerStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
