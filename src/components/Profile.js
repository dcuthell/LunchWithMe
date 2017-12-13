import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'


export default class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <FormLabel labelStyle={styles.formLabel}>A bit about me</FormLabel>
        <FormInput inputStyle={styles.formInput}/>


        {/* <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formInput: {
    width: 300,
  },
  formLabel: {
    color: '#42b3f4',
    fontFamily: 'Avenir',
    fontSize: 14,
    textAlign: 'left'
  }

})
