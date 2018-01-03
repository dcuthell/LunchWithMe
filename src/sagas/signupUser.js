import { takeLatest } from 'redux-saga/effects';
import { SIGNUP_USER } from '../lib/constants/actions';

const apiHost = 'http://lunchwith-api.eyecue.io';

export function* signupUser(action) {
  const request = new Request(apiHost+ '/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: JSON.stringify({
      'data': {
        'attributes': {
          'email': `${action.payload.email}`,
          'password': `${action.payload.password}`,
          'first_name': `${action.payload.first_name}`,
          'last_name': `${action.payload.last_name}`,
        },
        'type': 'register',
      }
    })
  });

  try {
    console.log('howdy' + action.payload.first_name + ' ' + action.payload.last_name + '!');
    const response = yield fetch(request);
    console.log(response);
    const responseJson = yield response.json();
    console.log(responseJson);

    //Login Success Message
    const greeting = 'Thanks for signing up, ' + responseJson.data.attributes.first_name + ' ' + responseJson.data.attributes.last_name + ' !';
    console.log(greeting);

  } catch (error) {
    console.log(error);
  }
}

export function* watchSignupUser(){
  yield takeLatest([SIGNUP_USER], signupUser);
}
