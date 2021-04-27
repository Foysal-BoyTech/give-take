const BASE_URL = 'http://192.168.1.224:9000';

function checkUser(email) {
  return fetch(`${BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((user) => user)
    .catch((err) => console.log(err));
}

export const createUser = (body) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((user) => user)
    .catch((err) => console.log(err));
};

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject()))
    .then((res) => (res.status === 204 ? res : res.json()))
    .catch((err) => {
      console.log(`Error fetching ${path}:`, err);
    });
}

export default { checkUser, createUser };
