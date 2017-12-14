import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

export default class SliderOne extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minimumTrackTintColor = 'gray'
          minimumValue = { .5 }
          maximumValue = { 30 }
        />
      <Text style={styles.text}>
          Years of Experience: {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  text: {
    paddingBottom: 8,
  }
});
