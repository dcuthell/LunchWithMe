import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import Login from './components/containers/LoginScreen';
import MapScene from './components/MapScene';
import SignupScreen from './components/containers/SignupScreen';
import SwiperScreen from './components/containers/SwiperScreen';
import routesNames from './lib/constants/routes';

//TODO: Import and fix routes
const routes = {
  [routesNames.Login]: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.SignupScreen]: {
    screen: SignupScreen,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.SwiperScreen]: {
    screen: SwiperScreen,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.MapScene]: {
    screen: MapScene,
    navigationOptions: {
      header: null,
    },
  },
};

const tabNavSettings = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  }
};

//Feed in routes
const AppNavigator = TabNavigator(routes, tabNavSettings);

//Set up for props
const AppWithoutNavigationState = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);

function mapNavToProps(store) {
  return store;
}

//Connect
const AppWithNavigationState = connect(mapNavToProps)(AppWithoutNavigationState);

//TODO: Set initial state
//const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default { AppWithNavigationState, navReducer };
