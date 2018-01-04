import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import Login from './components/containers/LoginScreen';
import MapScene from './components/MapScene';
import routesNames from './lib/constants/routes';
import Profile from './components/Profile';
import Favorites from './components/Favorites';

//TODO: Import and fix routes
const routes = {
  [routesNames.Login]: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  [routesNames.Favorites]: {
    screen: Favorites,
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
  [routesNames.Profile]: {
    screen: Profile,
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
