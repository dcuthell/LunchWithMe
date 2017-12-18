import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import ajax from '../ajax.js';

class Login extends React.Component {

  user = {
    email: '',
    password: '',
  }




  // static propTypes = {
  //   setUserState: PropTypes.func.isRequired,
  // }

  logIn = async () => {
    //This should send collected user info to server to validate, get back full user item to pass back to the App component

    this.user = {
      ...this.user,
      id: 42,
    };

    console.log("Hello" + this.user.email + " " + this.user.password);

    ajax();

    // this.props.setUserState(this.user);
  }

  render() {
    return(
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../images/lunchwithlogo_small.png')} />

        <View style={styles.accountInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="User Email"
            onChangeText={(text) => {this.user.email = text.toLowerCase();}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password"
            onChangeText={(text) => {this.user.password = text.toLowerCase();}}
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.logIn}>
            <Text style={styles.input}>Log Me In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f4'
  },
  header: {

  },
  accountInput: {
    },
  input: {
    width: 300,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'  },
  footer: {

  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  }

});

export default Login;
