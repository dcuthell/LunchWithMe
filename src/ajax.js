const apiHost = 'http://lunchwith-api.eyecue.io';

export default async function getLoginResponse() {
  console.log(apiHost+ '/login');

  // const headers = new Header({
  //
  // })
  //
  // const request = new Request(apiHost+ '/login', {
  //   method: 'POST',
  //   headers: {
  //     "Accept": "application/json",
  //     "Content-Type": "application/vnd.api+json",
  //   },
  //   body: JSON.stringify({
  //     "data": {
  //       "attributes": {
  //         "email": "bob@jones.com",
  //         "password": "bobjones"
  //       }
  //     }
  //   })
  // });

  const request = new Request('http://lunchwith-api.eyecue.io/session');
  try {
    console.log(request);
    const response = await fetch(request);
    const responseJson = response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
}
