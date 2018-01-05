import { combineReducers } from 'redux';

import userCoords from './userCoords';

export const reducers = { userCoords };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
