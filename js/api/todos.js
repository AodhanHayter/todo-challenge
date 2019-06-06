const baseUrl = 'http://localhost:3000/todos';

function get(id) {
  if (id === undefined) {
    return fetch(baseUrl).then(res => res.json());
  } else {
    return fetch(`${baseUrl}/${id}`).then(res => res.json());
  }
}

function add(itemText) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: itemText,
      status: 'todo',
    }),
  }).then(res => res.json());
}

export default {
  get,
  add,
};
