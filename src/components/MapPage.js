import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class MapPage extends React.Component {
  render(){
    return(
      <MapView style={styles.map} initialRegion={{
        latitude:41.0082,
        longitude:28.9784,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

export default MapPage;
