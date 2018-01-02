
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from 'react-native-simple-modal';
import SliderOne from './Slider'
import mapStyle from '../theme/mapStyle'

export default class MapScene extends React.Component {

  state = {
    open: false,
    region: {
      latitude: 45.5231,
      longitude: -122.6708,
      latitudeDelta: .05,
      longitudeDelta: .05,
    }
  }

  render() {
    console.log(JSON.stringify(mapStyle))

    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => this.setState({open: true})}>
            <View style={styles.filterView}>
              <Text style={styles.filterText}>FILTERS</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
         offset={this.state.offset}
         open={this.state.open}
         modalDidOpen={() => console.log('modal did open')}
         modalDidClose={() => this.setState({open: false})}
         style={styles.modal}>
         <View style={styles.whiteBox}>
           <SliderOne />
           <TouchableOpacity
           style={{margin: 5}}
           onPress={() => this.setState({offset: -100})}>
             <Text>Move modal up</Text>
           </TouchableOpacity>
           <TouchableOpacity
             style={{margin: 5}}
             onPress={() => this.setState({offset: 0})}>
             <Text>Reset modal position</Text>
           </TouchableOpacity>
           <View>
             <TouchableOpacity
               style={{margin: 5}}
               onPress={() => this.setState({open: false})}>
               <Text style={styles.footerText}>SEE MENTORS</Text>
             </TouchableOpacity>
           </View>
          </View>
        </Modal>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={ styles.map }
          customMapStyle={ mapStyle }
          showsUserLocation={ true }
          region={ this.state.region }>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: -1
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    height: '50%',
    width: '100%',
  },
  filterView: {
    position: 'absolute',
    marginTop: 45,
    backgroundColor: 'white',
    width: 70,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 10
  },
  filterText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontFamily: 'Avenir',
    alignSelf: 'center',
  },
  whiteBox: {
    height: '50%',
    width: '100%',
  },
  footer: {
    flex: 1,
    height: 10,
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
  }
});
