import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import  PropTypes  from 'prop-types';

import styles from './styles';

class SignupScreen extends React.Component {

  email = '';
  password = '';
  first_name = '';
  last_name = '';


  signUp = async () => {
    await this.props.signupRequest({
      email: this.email,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,
    });
  };

  render() {
    return(
      <View style={styles.container}>

        <Image source={require('../../images/lunchwithlogo_small.png')} />

        <View style={styles.accountInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="First Name"
            onChangeText={text => {this.first_name = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Last Name"
            onChangeText={text => {this.last_name = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Email Address"
            onChangeText={text => {this.email = text.toLowerCase();}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={text => {this.password = text.toLowerCase();}}
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.signUp}>
            <Text style={styles.create}> Sign Me Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignupScreen.defaultProps = {
  signupRequest: () => {},
}

SignupScreen.propTypes = {
  signupRequest: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  userData: state.storedUserData
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(SignupScreen);
