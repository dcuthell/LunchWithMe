const apiHost = 'http://lunchwith-api.eyecue.io';

export default async function getLoginResponse() {

  try {
    const response = await fetch(apiHost+ '/login' , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        'data': {
          'attributes': {
            'email': 'bob@jones.com',
            'password': 'bobjones'
          }
        }
      })
    });
    const responseJson = response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
}
