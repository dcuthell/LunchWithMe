import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text, Animated, Easing, Button, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import SplashScene from '../components/SplashScene'
import MapScene from '../components/MapScene'
import Appointment from '../components/Appointment'
import DrawerContainer from '../components/DrawerContainer'
import LoginScreen from '../components/LoginScreen'
import SignupScreen from '../components/SignupScreen'
import ForgottenPasswordScreen from '../components/ForgottenPasswordScreen'
import Login from '../components/containers/LoginScreen'
import Profile from '../components/Profile'

import ReduxNavigation from '../Navigation/ReduxNavigation'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = DrawerNavigator({
  splashScene: { screen: SplashScene },
  mapScene: { screen: MapScene },
  appointment: { screen: Appointment },
  profile: { screen: Profile }
}, {
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerContainer {...props} />
})

const DrawerNavigation = StackNavigator ({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#42b3f4'},
    headerTitleStyle: {
      color: 'white'
    },
    title: 'LUNCHWITH',
    gesturesEnabled: false,
    headerLeft: (
      <TouchableOpacity
        style={{paddingLeft: 10}}
        onPress={() => {
          if (navigation.state.index === 0) {
            navigation.navigate('DrawerOpen')
          } else {
            navigation.navigate('DrawerClose')
          }
        }}>
        <Image
          source={require('../images/hamburger_menu_small.png')}>
        </Image>
      </TouchableOpacity>
    ),

  })
})

const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  splashScene: { screen: SplashScene },
  login: { screen: Login },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#42b3f4'},
    headerTitleStyle: {
      color: 'white'
    },
    title: 'You are not logged in'
  }
})

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
