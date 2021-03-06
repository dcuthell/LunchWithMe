import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import CheckBox from 'react-native-checkbox'


export default class SignupScreen extends React.Component {
  user = {
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  }

  logIn = async () => {
    //This should send collected user info to server to validate, get back full user item to pass back to the App component

    ajax.getRegisterResponse(this.user.first_name, this.user.last_name, this.user.email, this.user.password);

    // this.props.setUserState(this.user);
  }

  render() {
    return(
      <View style={styles.container}>

        <Image source={require('../images/lunchwithlogo_small.png')} />

        <View style={styles.accountInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="First Name"
            onChangeText={(text) => {this.user.first_name = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Last Name"
            onChangeText={(text) => {this.user.last_name = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Email Address"
            onChangeText={(text) => {this.user.email = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(text) => {this.user.password = text;}}
          />
          <CheckBox
            checkBoxColor='white'
            style={{flex: 50, padding: 100, checkBoxColor: 'white', backgroundColor: 'white'}}
            labelStyle={styles.checkbox}
            label='I am a mentor'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
        <CheckBox
            labelStyle={styles.checkbox}
            label='I need a mentor'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.logIn}>
            <Text style={styles.create}> Sign Me Up!
            </Text>
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
    fontSize: 30,
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
