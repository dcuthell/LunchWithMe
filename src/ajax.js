const apiHost = 'http://lunchwith-api.eyecue.io';

export default async function getLoginResponse() {
  console.log(apiHost+ '/login');



  const request = new Request(apiHost+ '/login', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/vnd.api+json",
    },
    body: JSON.stringify({
      "data": {
        "attributes": {
          "email": "bob@jones.com",
          "password": "bobjones"
        }
      }
    })
  });
  try {
    console.log(request);
    const response = await fetch(request);
    const responseJson = await response.json();
    const greeting = responseJson.included[0].id;
    console.log(greeting);
  } catch (error) {
    console.log(error);
  }
}
