import React from 'react'
import { Text, StyleSheet, AsyncStorage } from 'react-native'
import { Drawer} from 'native-base'
import { Navigator } from 'react-native'

import Login from './Login'
import SideMenu from './SideMenu'
import Appointment from './Appointment'
import Map from './Map'
import SplashScene from './SplashScene'

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

// componentWillMount() {
//   this.setUserState();
//   this.getUserState();
// }

configureScene(route, routeStack) {
  return Navigator.SceneConfigs.PushFromRight
}

//DrawerStuff
toggleDrawer() {
  this.state.toggled ? this._drawer.close() : this._drawer.open()
}
openDrawer() {
  this.setState({toggled: true})
}
closeDrawer() {
  this.setState({toggled: false})
}

renderScene(route, navigator) {
  switch(route.title) {
    case 'Map': {
      return <MapScene {...route.passProps} navigator={navigator}/>
    }
    case 'Appointments': {
      return <AppointmentsScene {...route.passProps} navigator={navigator} />
    }
    default: {
      return null
    }
  }
}

  render() {
    const user = this.state.user;
    if(user === null){
      return (
        // <Login
        //   setUserState={this.setUserState}
        // />
        // <View style={styles.container}>
        //   <Text>LunchWithMe12</Text>
        // </View>
        <SplashScene />
      );
    }
    <Button></Button>
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu toggleDrawer={this.toggleDrawer.bind(this)} stores={this.state.store} navigator={this._navigator}
        theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
      >
        <Navigator
          ref={(ref) => this._navigator = ref}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
          initialRoute={{
          title: "Splash",
          passProps: {
            stores: this.state.store,
            toggleDrawer:this.toggleDrawer.bind(this),
            theme: this.state.theme
          }
          }}/>
      </Drawer>
      // <View style={styles.container}>
      //   <Text>LunchWithMe</Text>
      // </View>
    )
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

}

export default App;
