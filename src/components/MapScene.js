
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Animated, Dimensions } from 'react-native';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import MapView from'react-native-map-clustering';
import Modal from 'react-native-simple-modal';
import SliderOne from './Slider';
import Carousel from 'react-native-snap-carousel';

const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];

const interpolations = this.state.markers.map((marker, index) => {
  const inputRange = [
    (index - 1) * CARD_WIDTH,
    index * CARD_WIDTH,
    ((index + 1) * CARD_WIDTH),
  ];
  const scale = this.animation.interpolate({
    inputRange,
    outputRange: [1, 2.5, 1],
    extrapolate: "clamp",
  });
  const opacity = this.animation.interpolate({
    inputRange,
    outputRange: [0.35, 1, 0.35],
    extrapolate: "clamp",
  });
  return { scale, opacity };
});


const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;


export default class MapScene extends React.Component {

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

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
    },
    markers: [
          {
            coordinate: {
              latitude: 45.524548,
              longitude: -122.6749817,
            },
            title: "Best Place",
            description: "This is the best place in Portland",
            image: Images[0],
          },
          {
            coordinate: {
              latitude: 45.524698,
              longitude: -122.6655507,
            },
            title: "Second Best Place",
            description: "This is the second best place in Portland",
            image: Images[1],
          },
          {
            coordinate: {
              latitude: 45.5230786,
              longitude: -122.6701034,
            },
            title: "Third Best Place",
            description: "This is the third best place in Portland",
            image: Images[2],
          },
          {
            coordinate: {
              latitude: 45.521016,
              longitude: -122.6561917,
            },
            title: "Fourth Best Place",
            description: "This is the fourth best place in Portland",
            image: Images[3],
          },
        ],
        region: {
          latitude: 45.52220671242907,
          longitude: -122.6653281029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
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


  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
              <Text style={styles.title}>{ item.title }</Text>
          </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <MapView
          style = {styles.mapsView}
          ref={ref=>this.mapView=ref}
          onClusterPress={(coordinate, markers)=>{
            this.animate(coordinate);
            console.log(markers.length);
          }}
          customClusterMarkerDesign =
            {(<Image style = {{width: 30, height: 30}}
              source = {require('../images/map_marker.png')}/>)}
          radius = {120}
          clusterTextSize = {36}
          maxZoomLevel={15}
          provider={ PROVIDER_GOOGLE }
          style={{ flex: 1, height: '100%', width: '100%' }}
          region={ this.state.region }>

          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
const opacityStyle = {
  opacity: interpolations[index].opacity,
}
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.View style={[styles.ring]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}

          {/* <Marker coordinate={{latitude: 45.523, longitude: -122.670}} image={require('../images/lunchwithlogo_small.png')}>
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
          </Marker> */}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

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
    );
  }
}

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = 100;
const itemWidth = 50;
const itemHeight = 200;

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
  },
  crollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
});
