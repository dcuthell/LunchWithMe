import React from 'react'
import { Text, AsyncStorage, View } from 'react-native'
import { Drawer} from 'native-base'
import { Navigator } from 'react-native'
import { Button } from 'react-native'

import Login from './Login'
import SideMenu from './SideMenu'
import Appointment from './Appointment'
import MapScene from './MapScene'
import SplashScene from './SplashScene'
import PrimaryNav from '../Navigation/AppNavigation'

import theme from '../theme/base-theme'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      user: null,
      theme: theme
    }
  }
  //
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   }
  // });

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
    // const user = this.state.user;
    // if(user === null){
    //   return (
    //     //
    //
    //   );
    // }
    return (
      <View>
        <Text>LunchWithMe</Text>
      </View>

    )
  }



}

export default App;
