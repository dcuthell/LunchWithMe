import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class SplashScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>First Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
