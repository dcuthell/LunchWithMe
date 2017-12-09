import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import Login from './Login';

class App extends React.Component {
  state = {
    user: null,
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
    const user = this.state.user;
    if(user === null){
      return (
        <Login
          setUserState={this.setUserState}
        />
        // <View style={styles.container}>
        //   <Text>LunchWithMe12</Text>
        // </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>LunchWithMe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
