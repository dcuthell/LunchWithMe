import { Map } from 'immutable';

import createReducer from '../lib/helpers/createReducer';
import { SET_PROFILES } from '../lib/constants/actions';

const cards = [
  {
    name: 'Bobby',
    key: 0,
    number: '201-902-1447',
    coordinates: {latitude: 45.523, longitude: -122.670}
  },
  {
    name: 'Ti',
    key: 1,
    number: '201-575-3676',
    coordinates: {latitude: 45.524, longitude: -122.672}
  },
  {
    name: 'Nicky',
    key: 2,
    number: '201-867-0115',
    coordinates: {latitude: 45.526, longitude: -122.676}
  },
  {
    name: 'Tony',
    key: 3,
    number: '201-567-1447',
    coordinates: {latitude: 45.526, longitude: -122.678}
  },
  {
    name: 'Timmy',
    key: 4,
    number: '201-575-6969',
    coordinates: {latitude: 45.524, longitude: -122.680}
  },
  {
    name: 'Johnny',
    key: 5,
    number: '201-865-0231',
    coordinates: {latitude: 45.522, longitude: -122.682}
  },
];
const defaultState = Map().set('profiles', cards);

export default createReducer(defaultState, {

  [SET_PROFILES](state, action) {
    return state.set('profiles', action.payload);
  },

});
