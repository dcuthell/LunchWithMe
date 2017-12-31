import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER } from '../lib/constants/actions';

const apiHost = 'http://lunchwith-api.eyecue.io';

//Changed name but didnt fix
export function* loginUser(action) {

  console.log('youre in luck');
  // console.log('email: ' + action.payload.email + ' password: ' + action.payload.password);
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

  console.log('Hi again');

  try {
    const response = yield fetch(request);
    const responseJson = yield response.json();

    const greeting = 'Hello there, ' + responseJson.included[0].attributes.first_name + ' ' + responseJson.included[0].attributes.last_name + ' !';
    console.log(greeting);

    // const userDataToSave = responseJson.included[0].attributes;
    // yield put([LOGIN_REQUEST_SUCCESS], payload: userDataToSave});

  } catch (error) {

    console.log('sup biiiiitch');
    // yield put([LOGIN_REQUEST_FAILUE]);
    console.log(error);
  }
}

export function* watchLoginUser(){
  console.log('watch saw');
  yield takeLatest([LOGIN_USER], loginUser);
}
