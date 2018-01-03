import React from 'react';
import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends React.Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data = {[
                {title: 'hello',
                subtitle: 'hello again'},
              ]}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
