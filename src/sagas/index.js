import { fork, all } from 'redux-saga/effects';

import loginUser from 'sagas/loginUser';


export default function* rootSaga() {
  yield all([
    fork(loginUser),
  ]);
}
