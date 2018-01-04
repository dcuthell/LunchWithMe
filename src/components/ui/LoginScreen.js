import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import  PropTypes  from 'prop-types';

export default class LoginScreen extends React.Component {
  email = '';
  password = '';

  logIn = async () => {
    await this.props.loginRequest({
      email: this.email,
      password: this.password
    });
  };

  render () {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../images/lunchwithlogo_small.png')} />

        <View style={styles.accountInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="User Email"
            onChangeText={text => {this.email = text.toLowerCase();}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password"
            onChangeText={text => {this.password = text.toLowerCase();}}
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

LoginScreen.propTypes = {
  loginRequest: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f4'
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
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  }
});
