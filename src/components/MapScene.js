
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapView from'react-native-map-clustering';
import Modal from 'react-native-simple-modal';
import SliderOne from './Slider';

export default class MapScene extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/ic_search.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  state = {
    open: false,
    region: {
      latitude: 45.5231,
      longitude: -122.6708,
      latitudeDelta: .05,
      longitudeDelta: .05,
    }
  }

  animate(coordinate){
    let newRegion = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: this.mapView.state.region.latitudeDelta - this.mapView.state.region.latitudeDelta/2,
      longitudeDelta: this.mapView.state.region.longitudeDelta - this.mapView.state.region.longitudeDelta/2,
    };
    this.mapView._root.animateToRegion(newRegion, 1000);
    console.log('cluster clicked');
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style = {styles.mapsView}
          ref={ref=>this.mapView=ref}
          onClusterPress={(coordinate, markers)=>{
            this.animate(coordinate);
            console.log(markers.length);
          }}
          customClusterMarkerDesign =
            {(<Image style = {{width: '100%', height: '100%'}}
              source = {require('../images/lunchwithlogo_medium.png')}/>)}
          radius = {120}
          clusterTextSize = {36}
          maxZoomLevel={15}
          provider={ PROVIDER_GOOGLE }
          style={{ flex: 1, height: '100%', width: '100%' }}
          region={ this.state.region }>
          <Marker coordinate={{latitude: 45.523, longitude: -122.670}} image={require('../images/lunchwithlogo_small.png')}>
            <Callout>
              <Text>Hello</Text>
            </Callout>
          </Marker>
          <Marker coordinate={{latitude: 45.524, longitude: -122.672}}
            image={require('../images/lunchwithlogo_small.png')}/>
          <Marker coordinate={{latitude: 45.526, longitude: -122.676}}
            image={require('../images/lunchwithlogo_small.png')}/>
          <Marker coordinate={{latitude: 45.526, longitude: -122.678}}
            image={require('../images/lunchwithlogo_small.png')}/>
          <Marker coordinate={{latitude: 45.524, longitude: -122.680}}
            image={require('../images/lunchwithlogo_small.png')}/>
          <Marker coordinate={{latitude: 45.522, longitude: -122.682}}
            image={require('../images/lunchwithlogo_small.png')}/>
          <Marker coordinate={{latitude: 45.516, longitude: -122.676}}
            image={require('../images/lunchwithlogo_small.png')}>
            <Text>I am a little donutboy</Text>
          </Marker>
        </MapView>
        <View style = {styles.initialFilterView}>
          <TouchableOpacity onPress={() => this.setState({open: true})}>
            <View style={styles.filterView}>
              <Text style={styles.filterText}>FILTERS</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.modalWrap}>
            <Modal
               offset={this.state.offset}
               open={this.state.open}
               modalDidOpen={() => console.log('modal did open')}
               modalDidClose={() => this.setState({open: false})}
               style={styles.modal}>
               <View style={styles.whiteBox}>
                 <Text>FIND MENTORS WITH:</Text>
                 <SliderOne />
                 <Text>Practice Text</Text>
                 <Text>Practice Text</Text>
                 <Text>Practice Text</Text>
                 <View style={styles.footer}>
                   <TouchableOpacity
                     style={{margin: 5}}
                     onPress={() => this.setState({open: false})}>
                     <Text style={styles.footerText}>SEE MENTORS</Text>
                   </TouchableOpacity>
                 </View>
               </View>
            </Modal>
          </View>
        </View>
      </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
  },
  modalWrap: {
    height: '80%',
    width: '100%',
  },
  initialFilterView: {
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    width: '100%'
  },
  filterView: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 22,
  },
  filterText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontFamily: 'Avenir',
    alignSelf: 'center',
  },
  whiteBox: {
    height: '100%',
    width: '100%',
  },
  footer: {
    flex: 1,
    height: 10,
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Avenir',
    color: 'black',
  },
  icon: {
    height: 30,
    width: 30,
  },
  tintColor: {
    color: 'red',
  }
});
