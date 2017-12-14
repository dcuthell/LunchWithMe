import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Switch} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'


export default class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <FormLabel labelStyle={styles.formLabel}>A bit about me</FormLabel>
        <FormInput inputStyle={styles.formInput}/>
        <Text style={styles.text}>My Skills</Text>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>React-Native</FormLabel>
            <View style={styles.switch} >
              <Switch label="Save my details" border={false} name="save_details" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>Python</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>Swift</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>PHP</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>.NET</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>JavaScript</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>Perl</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>Android</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>CSS</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>
        <View style={styles.row}>
          <FormLabel labelStyle={styles.formLabel}>HTML</FormLabel>
            <View style={styles.switch} >
              <Switch label="python" border={false} name="python" />
            </View>
        </View>

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
    fontSize: 15,
    textAlign: 'left'
  },
  switch: {
    fontSize: 15,
    fontFamily: 'Avenir',
    color: '#42b3f4',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 7,
    paddingRight: 20,
    justifyContent: 'flex-end'
  },
  text: {
    // paddingTop: 15,
    fontSize: 15,
    fontFamily: 'Avenir',
    color: 'gray',
    flexDirection: 'row',
    textAlign: 'left',
    paddingLeft: 19,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
})
