import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Login from '../components/Login'
import { Text } from 'react-native'
import SplashScene from '../components/SplashScene'
import MapScene from '../components/MapScene'
import Appointment from '../components/Appointment'

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
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
    headerLeft: <Text onPress={() =>
    navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

const PrimaryNav = StackNavigator({
  // Login: { screen: Login },
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'Main Screen',
  initialRouteName: 'Main'
})

export default PrimaryNav
