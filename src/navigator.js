import React from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';

import LoginScreen from './containers/LoginScreen';
import MapScreen from './containers/MapScreen'
import SignupScreen from './containers/SignupScreen';
import SwiperScreen from './components/containers/SwiperScreen';
import routesNames from './lib/constants/routes';

//TODO: Import and fix routes
const routes = {
  [routesNames.LoginScreen]: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: 'Login',
    },
  },
  [routesNames.SignupScreen]: {
    screen: SignupScreen,
    navigationOptions: {
      tabBarLabel: 'Sign Up',
    },
  },
  [routesNames.MapScreen]: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Browse Map',
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
