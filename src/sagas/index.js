import { all } from 'redux-saga/effects';

import { watchLoginUser } from './loginUser';


export default function* rootSaga() {
  yield all([
    watchLoginUser(),
  ]);
}
