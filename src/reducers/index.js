import { combineReducers } from 'redux';

import userCoords from './userCoords';
import profiles from './profiles';
import viewCoords from './viewCoords';

export const reducers = { userCoords, profiles, viewCoords };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
