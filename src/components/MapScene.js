
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


export default class MapScene extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                  }}
          source={require('../images/map_dummy.png')} />
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
