import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class SplashScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>SPLASH PAGE!!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
