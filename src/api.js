function performGetRequest(query) {
  return fetch(`https://api.jqestate.ru/v1/${query}`).then(response => response.json());
}

function performPostRequest(query) {
  return fetch(`https://api.jqestate.ru/v1/${query}`, { method: 'POST' }).then(response =>
    response.json(),
  );
}

export { performGetRequest as get, performPostRequest as post };
