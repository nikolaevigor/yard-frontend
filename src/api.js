const baseUrl = 'https://api.jqestate.ru/v1';

function get(query) {
  return fetch(`${baseUrl}${query}`).then(res => res.json());
}

function post(query) {
  return fetch(`${baseUrl}${query}`, { method: 'POST' }).then(res => res.json());
}

export { get, post };
