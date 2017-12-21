import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer';
import { LOGIN_USER } from 'lib/constants/actions';

//TODO: Should take something other than userData
const defaultState = Map().set('userData', 'blank userdata from default state');

export default createReducer(defaultState, {

  [LOGIN_USER](state, action) {
    return state.set('userData', action.payload);
  },

});
