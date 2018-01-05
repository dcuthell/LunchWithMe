import React from 'react';
import { Text, Image, } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapView from 'react-native-map-clustering';

export default class MapScreen extends React.Component {

  state = {
    open: false,
    region: {
      latitude: 45.5231,
      longitude: -122.6708,
      latitudeDelta: .05,
      longitudeDelta: .05,
    }
  }

  bagelMarker = (<Text></Text>);

  bagelBoy = (lat, lon) => {
    this.bagelMarker = (<Marker
      coordinate={{latitude: lat, longitude: lon}}
      image={require('../../images/watch_later.png')}
      cluster={false}
      onDragStart={e => console.log('start' + e.nativeEvent.coordinate.latitude)}
      onDrag={e => console.log('drag' + e.nativeEvent.coordinate.latitude)}
      onDragEnd={e=> {console.log('ended'); this.props.setUserCoords({lat: e.nativeEvent.coordinate.latitude, lon: e.nativeEvent.coordinate.longitude});}}
      draggable
    />);
  };

  animate(coordinate){
    const newRegion = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: this.mapView.state.region.latitudeDelta - this.mapView.state.region.latitudeDelta/2,
      longitudeDelta: this.mapView.state.region.longitudeDelta - this.mapView.state.region.longitudeDelta/2,
    };
    this.mapView._root.animateToRegion(newRegion, 1000);
    console.log('cluster clicked');
  }

  showStuff = stuff => {
    const lat = stuff.nativeEvent.coordinate.latitude;
    const lon = stuff.nativeEvent.coordinate.longitude;
    console.log('latitude: ' + lat + '\nlongitude: ' + lon);
    this.bagelBoy(lat, lon);
    const payload = { lat, lon };
    this.props.setUserCoords(payload);
  }

  render() {
    console.log(this.props);
    return (
      <MapView
        ref={ref=>this.mapView=ref}
        onClusterPress={(coordinate, markers)=>{
          this.animate(coordinate);
          console.log(markers.length);
        }}
        customClusterMarkerDesign =
          {(<Image style = {{width: '100%', height: '100%'}}
            source = {require('../../images/lunchwithlogo_medium.png')}/>)}
        radius = {120}
        clusterTextSize = {36}
        maxZoomLevel={15}
        moveOnMarkerPress={false}
        onPress={e=>this.showStuff(e)}
        provider={ PROVIDER_GOOGLE }
        style={{ flex: 1, height: '100%', width: '100%' }}
        region={ this.state.region }>
        <Marker coordinate={{latitude: 45.523, longitude: -122.670}} image={require('../../images/lunchwithlogo_small.png')}>
          <Callout>
            <Text>Hello</Text>
          </Callout>
        </Marker>
        <Marker coordinate={{latitude: 45.524, longitude: -122.672}}
          image={require('../../images/lunchwithlogo_small.png')}/>
        <Marker coordinate={{latitude: 45.526, longitude: -122.676}}
          image={require('../../images/lunchwithlogo_small.png')}/>
        <Marker coordinate={{latitude: 45.526, longitude: -122.678}}
          image={require('../../images/lunchwithlogo_small.png')}/>
        <Marker coordinate={{latitude: 45.524, longitude: -122.680}}
          image={require('../../images/lunchwithlogo_small.png')}/>
        <Marker coordinate={{latitude: 45.522, longitude: -122.682}}
          image={require('../../images/lunchwithlogo_small.png')}/>
        {this.bagelMarker}
      </MapView>
    );
  }
}
