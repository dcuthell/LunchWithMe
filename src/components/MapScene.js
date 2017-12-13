
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export default class MapScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>MAP!</Text>
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
