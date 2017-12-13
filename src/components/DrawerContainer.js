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
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('appointment')}
          style={styles.uglyDrawerItem}>
          My Lunches
        </Text>
        <Text
          onPress={() => navigation.navigate('mapScene')}
          style={styles.uglyDrawerItem}>
          Find Lunches
        </Text>
        <Text
          onPress={() => navigation.navigate('profile')}
          style={styles.uglyDrawerItem}>
          My Profile
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42b3f4',
    paddingTop: 100,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontFamily: 'Avenir',
    color: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'
  }
})
