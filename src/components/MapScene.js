
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from 'react-native-simple-modal';

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
    return (
      <View style={styles.container}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={{ flex: 1, height: '100%', width: '100%' }}
          showsUserLocation={ true }
          region={ this.state.region }>

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
                   <TouchableOpacity
                     style={{margin: 5}}
                     onPress={() => this.setState({open: false})}>
                     <Text>Close modal</Text>
                   </TouchableOpacity>
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
    height: '100%',
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
  }
});
