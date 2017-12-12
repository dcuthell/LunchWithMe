import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import createStore from '../Redux'

import { Text, AsyncStorage, View } from 'react-native'
import { Drawer} from 'native-base'
import { Navigator } from 'react-native'
import { Button } from 'react-native'

import ReduxNavigation from '../Navigation/ReduxNavigation'
import Login from './Login'
import Appointment from './Appointment'
import MapScene from './MapScene'
import SplashScene from './SplashScene'

import theme from '../theme/base-theme'

const store = createStore()


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      user: null,
      theme: theme
    }
  }

  //Takes user object to store outside of the app, and will set user state to same value(is that needed?)
  setUserState = async (user = null) => {
    if(user){
      try{
        await AsyncStorage.setItem('@MyUserKey', user.id);
        console.log('User Id Stored');
      } catch (error){
        console.log('AsyncStorage Setting Error: ' + error);
      }
    }
    this.setState({ user });
  }

  //Retrieves stored user object from AsyncStorage, and sets user state to same value
  getUserState = async () => {
    try{
      const user = await AsyncStorage.getItem('@MyUserKey');
      if(user){
        console.log('UserKey Found' + user);
        this.setState({ user });
      }
    } catch(error) {
      console.log('AsyncStorage Getting Error: ' + error);
    }
  }

componentWillMount() {
  this.setUserState();
  this.getUserState();
}


  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <ReduxNavigation />
        <Text>LunchWithMe</Text>
      </View>
      </Provider>
    )
  }
}

export default App;
