import React from 'react';
import { Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapView from 'react-native-map-clustering';

import SwiperScreen from '../containers/SwiperScreen';
import getViewCoords from '../../selectors/viewCoords';
import getUserCoords from '../../selectors/userCoords';
import styles from './styles';

class MapScreen extends React.Component {

  //viewSpace = getViewCoords(store);

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
    if(stuff.nativeEvent.action == 'marker-press'){
      console.log('howdy');
    }else{
      const lat = stuff.nativeEvent.coordinate.latitude;
      const lon = stuff.nativeEvent.coordinate.longitude;
      console.log(stuff.nativeEvent);
      console.log('latitude: ' + lat + '\nlongitude: ' + lon);
      this.bagelBoy(lat, lon);
      const payload = { lat, lon };
      this.props.setUserCoords(payload);
    }
  }

  makeMarkersFromCards(cards) {
    const markers = [];
    cards.map(card => {
      markers.push(
        <Marker key={card.key} coordinate={{latitude: card.coordinates.latitude, longitude: card.coordinates.longitude}}
          image={require('../../images/lunchwithlogo_small.png')}/>
      );
    });
    return markers;
  }

  cards = [
    {
      name: 'Bobby',
      key: 0,
      number: '201-902-1447',
      coordinates: {latitude: 45.523, longitude: -122.670}
    },
    {
      name: 'Ti',
      key: 1,
      number: '201-575-3676',
      coordinates: {latitude: 45.524, longitude: -122.672}
    },
    {
      name: 'Nicky',
      key: 2,
      number: '201-867-0115',
      coordinates: {latitude: 45.526, longitude: -122.676}
    },
    {
      name: 'Tony',
      key: 3,
      number: '201-567-1447',
      coordinates: {latitude: 45.526, longitude: -122.678}
    },
    {
      name: 'Timmy',
      key: 4,
      number: '201-575-6969',
      coordinates: {latitude: 45.524, longitude: -122.680}
    },
    {
      name: 'Johnny',
      key: 5,
      number: '201-865-0231',
      coordinates: {latitude: 45.522, longitude: -122.682}
    },
  ];

  render() {
    console.log(this.props);
    //console.log(this.viewSpace);
    return (
      <View style={styles.container}>
        <MapView
          ref={ref=>this.mapView=ref}
          onClusterPress={(coordinate, markers)=>{
            this.animate(coordinate);
            console.log(markers);
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
          style={{ height: '80%', width: '100%' }}
          region={ this.state.region }>
          {/* <Marker key={69} coordinate={{latitude: 45.523, longitude: -122.670}} image={require('../../images/lunchwithlogo_small.png')}>
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
            image={require('../../images/lunchwithlogo_small.png')}/> */}
          {this.makeMarkersFromCards(this.cards)}
          {this.bagelMarker}
        </MapView>
        <SwiperScreen cards={this.cards} style={{ height: '20%', width: '100%' }}>
        </SwiperScreen>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return { userCoords: getUserCoords(state) };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(MapScreen);
