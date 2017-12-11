import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class Login extends React.Component {

  user = {
    name: '',
    password: '',
  }

  static propTypes = {
    setUserState: PropTypes.func.isRequired,
  }

  logIn = () => {
    //This should send collected user info to server to validate, get back full user item to pass back to the App component

    this.user = {
      ...this.user,
      id: 42,
    };

    this.props.setUserState(this.user);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>
          Please Login or Create an Account
        </Text>
        <View style={styles.accountInput}>
          <Text style={styles.inputDesc}>User</Text>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            onChangeText={(text) => {this.user.name = text;}}
          />
          <Text style={styles.inputDesc}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => {this.user.password = text;}}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.logIn}>
          </TouchableOpacity>
          <Text>
            Create A New Account
          </Text>
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
  },
  header: {

  },
  accountInput: {
    backgroundColor: 'blue',
  },
  inputDesc: {
    fontSize: 16,
  },
  input: {
    backgroundColor: 'green',
  },
  footer: {
    
  },

});

export default Login;
