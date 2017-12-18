const apiHost = 'http://lunchwith-api.eyecue.io';

export default async function getLoginResponse(email, password) {
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
          "email": `${email}`,
          "password": `${password}`
        }
      }
    })
  });
  try {
    console.log(request);
    const response = await fetch(request);
    const responseJson = await response.json();
    const greeting = 'Hello there, ' + responseJson.included[0].attributes.first_name + ' ' + responseJson.included[0].attributes.last_name + ' !';
    console.log(greeting);
  } catch (error) {
    console.log(error);
  }
}
