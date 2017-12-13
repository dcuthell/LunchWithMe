import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text, Animated, Easing, Button, View } from 'react-native'
import SplashScene from '../components/SplashScene'
import MapScene from '../components/MapScene'
import Appointment from '../components/Appointment'
import DrawerContainer from '../components/DrawerContainer'
import LoginScreen from '../components/LoginScreen'
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
}, {
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerContainer {...props} />
})

const DrawerNavigation = StackNavigator ({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'blue'},
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
  splashScene: { screen: SplashScene }
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
  drawerStack: { screen: DrawerNavigation },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
