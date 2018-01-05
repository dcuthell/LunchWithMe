import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_USER_COORDS } from '../lib/constants/actions';

//TODO: Should take something other than userData
const defaultState = Map().set('userCoords', {lat: 45, lon: -122});

export default createReducer(defaultState, {

  [SET_USER_COORDS](state, action) {
    return state.set('userCoords', action.payload);
  },

});
