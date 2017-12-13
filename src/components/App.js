import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import DrawerContainer from '../components/DrawerContainer'

import { Text, AsyncStorage, View, Header, StyleSheet, StatusBar } from 'react-native'
import { Drawer} from 'native-base'
import { Navigator } from 'react-native'
import { Button } from 'react-native'

import ReduxNavigation from '../Navigation/ReduxNavigation'

import Login from './Login'
import Appointment from './Appointment'
import MapScene from './MapScene'
import SplashScene from './SplashScene'


const store = createStore()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    },
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View style={ styles.container }>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
      </Provider>
    )
  }
}

export default App;
