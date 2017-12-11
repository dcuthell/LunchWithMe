
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class SplashScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Scene</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
