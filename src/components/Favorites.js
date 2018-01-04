import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Switch} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import SliderOne from './Slider'
import Slider from "react-native-slider";

export default class Favorites extends React.Component {

  static navigationOptions = {

    tabBarLabel: 'Favorites',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/ic_favorite_border.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (

      <View><Text>Favorites Page</Text>
      </View>
    );
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
    paddingTop: 15,
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
