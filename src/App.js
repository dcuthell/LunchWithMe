import React, { Component } from 'react';
import { Provider} from 'react-redux';

import getStore from './store';
import navigator from './navigator';


//TODO: Make neat
const { navReducer, AppWithNavigationState } = navigator;

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

App.defaultProps = {
  store: getStore(navReducer),
};
