import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Login from './components/containers/LoginScreen';
// import MapScene from './components/MapScene';
import routesNames from './lib/constants/routes';

//TODO: Import and fix routes
const routes = {
  [routesNames.Login]: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
};

//Feed in routes
const AppNavigator = StackNavigator(routes);

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
