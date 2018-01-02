import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER } from '../lib/constants/actions';

const apiHost = 'http://lunchwith-api.eyecue.io';

export function* loginUser(action) {
  const request = new Request(apiHost+ '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: JSON.stringify({
      'data': {
        'attributes': {
          'email': `${action.payload.email}`,
          'password': `${action.payload.password}`
        }
      }
    })
  });

  try {
    const response = yield fetch(request);
    const responseJson = yield response.json();

    //Login Success Message
    const greeting = 'Hello there, ' + responseJson.included[0].attributes.first_name + ' ' + responseJson.included[0].attributes.last_name + ' !';
    console.log(greeting);

  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginUser(){
  yield takeLatest([LOGIN_USER], loginUser);
}
