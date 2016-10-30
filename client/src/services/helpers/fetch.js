export const COMMON_API_GATEWAY_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function apiGatewayRequest(url, options) {
  url = `${url}`;
  return fetch(url, options)
    .then(checkResponseStatus)
    .then((response) => response.json());
}

function checkResponseStatus(response) {
  if (response.status === 200) {
    return response;
  }

  console.log('FetchError: ', response.statusText);
  let error = new Error('Request failed');
  error.response = response;
  throw error;
}
