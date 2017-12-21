import { combineReducers } from 'redux';

import login from 'reducers/login';

export const reducers = { login };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
