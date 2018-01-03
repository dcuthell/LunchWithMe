import { all } from 'redux-saga/effects';

import { watchLoginUser } from './loginUser';
import { watchSignupUser } from './signupUser';


export default function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchSignupUser(),
  ]);
}
