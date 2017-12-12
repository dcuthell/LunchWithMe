import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import { createStyle } from 'react-native-theming'

import { Text, AsyncStorage, View, Header, StyleSheet } from 'react-native'
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View>
        <ReduxNavigation />
      <Text style={styles.container}>LunchWithMe</Text>
      </View>
      </Provider>
    )
  }
}

export default App;
