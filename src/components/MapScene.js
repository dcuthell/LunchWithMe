
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Marker } from 'react-native-maps';

import MapScreen from './MapScreen';



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

  // makeNewMarker = (e, props) => {
  //   const lat = e.nativeEvent.coordinate.latitude;
  //   const lon = e.nativeEvent.coordinate.longitude;
  //
  //   return ({
  //     ... props.children,
  //     <Marker coordinate={{latitude: lat, longitude: lon}}
  //       image={require('../../images/lunchwithlogo_small.png')}/>
  //   })
  // }

  render() {
    //console.log(this.props);
    return (
      <View style={styles.container}>
        <MapScreen someString={'Hey Buddy'}>
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
