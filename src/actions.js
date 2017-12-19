import C from './constants';

const apiHost = 'http://lunchwith-api.eyecue.io';

export async function loginRequest(email, password){

  dispatch({
    type: C.SENDING_LOGIN_REQUEST
  }); //set some bool to signal user is not logged in. Needed?

  const request = new Request(apiHost+ '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: JSON.stringify({
      'data': {
        'attributes': {
          'email': `${email}`,
          'password': `${password}`
        }
      }
    })
  });

  try {
    const response = await fetch(request);
    const responseJson = await response.json();
    const greeting = 'Hello there, ' + responseJson.included[0].attributes.first_name + ' ' + responseJson.included[0].attributes.last_name + ' !';
    console.log(greeting);
    const userData = responseJson.included[0].attributes;
    dispatch({
      type: C.LOGIN_REQUEST_SUCCESS,
      payload: userData
    });
  } catch (error) {
    dispatch({
      type: C.LOGIN_REQUEST_FAILURE
    });
    console.log(error);
  }

}
