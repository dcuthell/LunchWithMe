import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import  PropTypes  from 'prop-types';

const SignupScreen = ({signupRequest=f=>f}) => {

  let email, password, first_name, last_name;


  const signUp = async () => {
    await signupRequest({
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
    });
  };

  return (
    <View style={styles.container}>

      <Image source={require('../../images/lunchwithlogo_small.png')} />

      <View style={styles.accountInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          placeholder="First Name"
          onChangeText={text => {first_name = text;}}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          placeholder="Last Name"
          onChangeText={text => {last_name = text;}}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          placeholder="Email Address"
          onChangeText={text => {email = text.toLowerCase();}}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          placeholder="Password"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={text => {password = text.toLowerCase();}}
        />
      </View>
      <View>
        <TouchableOpacity onPress={signUp}>
          <Text style={styles.create}> Sign Me Up!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignupScreen.propTypes = {
  loginUser: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f4'
  },
  header: {
    fontSize: 30,
  },
  accountInput: {},
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
    fontSize: 30,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  },
  create: {
    width: 300,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'
  },
  checkbox: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  }
});

export default SignupScreen;
