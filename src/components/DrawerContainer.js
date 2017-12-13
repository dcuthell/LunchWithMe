import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style = { styles.container }>
        <Text
          onPress={() =>
          navigation.navigate('splashScene')}
          style={styles.uglyDrawerItem}>
          SplashScene
        </Text>
        <Text
          onPress={() => navigation.navigate('appointment')}
          style={styles.uglyDrawerItem}>
          Appointment
        </Text>
        <Text
          onPress={() => navigation.navigate('mapScene')}
          style={styles.uglyDrawerItem}>
          MapScene
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 100,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  }
})
