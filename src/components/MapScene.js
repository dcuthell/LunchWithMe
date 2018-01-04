
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import MapScreen from './containers/MapScreen';



export default class MapScene extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'DaMap',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/hamburger_menu_small.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <MapScreen someString={'Hey Buddy'}>
          <Text>Im a little bagelboy</Text>
        </MapScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
