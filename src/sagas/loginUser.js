import { put, takeLatest } from 'redux-saga/effects';

const apiHost = 'http://lunchwith-api.eyecue.io';


export function* loginUser(userData) {

  const request = new Request(apiHost+ '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: JSON.stringify({
      'data': {
        'attributes': {
          'email': `${userData.email}`,
          'password': `${userData.password}`
        }
      }
    })
  });

  try {
    const response = yield fetch(request);
    const responseJson = yield response.json();

    const greeting = 'Hello there, ' + responseJson.included[0].attributes.first_name + ' ' + responseJson.included[0].attributes.last_name + ' !';
    console.log(greeting);

    const userDataToSave = responseJson.included[0].attributes;
    yield put({type: 'C.LOGIN_REQUEST_SUCCESS', payload: userDataToSave});

  } catch (error) {
    yield put({type: 'C.LOGIN_REQUEST_FAILUE'});
    console.log(error);
  }
}

export function* watchLoginUser(){
  yield takeLatest('C.SENDING_LOGIN_REQUEST', loginUser);
}
