import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import PropTypes from 'prop-types';

import Swiper from 'react-native-swiper';

import styles from './styles';

class SwiperScreen extends React.Component {

  makeCardNameLine(cards) {
    let message = '';
    cards.map(card => {
      message += `${card.name} ,`;
    });
    return message;
  }

  renderCards(cards) {
    const stuff = [];
    cards.map(card => {
      stuff.push(
        <View style={styles.slide1} key={card.key}>
          <Text style={styles.text}>{card.name}</Text>
        </View>
      );
    });
    return stuff;
  }

  render() {
    return(
      <Swiper style={styles.wrapper} removeClippedSubviews={false} showsButtons={true}>
        {this.renderCards(this.props.cards)}
      </Swiper>
    );
  }
}

SwiperScreen.defaultProps = {
  cards: []
};

SwiperScreen.propTypes = {
  cards: PropTypes.array.isRequired
};


const mapStatetoProps = state => (state);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(SwiperScreen);
