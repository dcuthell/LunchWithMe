import React from 'react';
import { Text, Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-simple-modal';
import SliderOne from './Slider'


class MapPage extends React.Component {
  state = {
    open: false,
    region: {
      latitude: 45.5231,
      longitude: -122.6708,
      latitudeDelta: .05,
      longitudeDelta: .05,
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude:41.0082,
        longitude:28.9784,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
      <View>
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
    </MapView>
  </View>
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
    height: '90%',
    width: '100%',
  },
  filterView: {
    marginTop: 10,
    backgroundColor: 'white',
    width: 70,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
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

export default MapPage;
