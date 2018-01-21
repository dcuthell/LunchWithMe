import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import  PropTypes  from 'prop-types';

import styles from './styles';

class LoginScreen extends React.Component {
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

LoginScreen.defaultProps = {
  loginRequest: () => {},
}

LoginScreen.propTypes = {
  loginRequest: PropTypes.func.isRequired
};

const mapStatetoProps = state => (state);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
