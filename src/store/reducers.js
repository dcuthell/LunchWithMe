import C from 'constants';
import { combineReducers } from 'redux';

export const loginRequested = (state=false, action) => {
  switch(action.type) {
    case C.SENDING_LOGIN_REQUEST :
      return true;
    case C.LOGIN_REQUEST_SUCCESS:
      return false;
    case C.LOGIN_REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

export const loginUser = (state=null, action) => {
  switch(action.type) {
    case C.LOGIN_REQUEST_SUCCESS:
      return action.payload;
    case C.LOGIN_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  loginRequested,
  loginUser
});
