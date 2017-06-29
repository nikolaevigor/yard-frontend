const baseUrl = 'https://api.jqestate.ru/v1';

export function get(resource) {
  return fetch(`${baseUrl}${resource}`).then(res => res.json());
}

export function post(resource) {
  return fetch(`${baseUrl}${resource}`, { method: 'POST' }).then(res => res.json());
}
