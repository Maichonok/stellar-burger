const ingredientsConfig = {
  url: 'https://norma.nomoreparties.space/api/ingredients',
  headers: {
    "Content-Type": "application.json",
  },
}

const orderConfig = {
  url: 'https://norma.nomoreparties.space/api/orders',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}

function checkResponse (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`${res.status}`));
};


function getData () {
 return fetch(`${ingredientsConfig.url}`)
  .then(checkResponse)
}

function order (ingredients) {
  const body = { ingredients };
  return fetch(orderConfig.url, {...orderConfig, body: JSON.stringify(body)})
    .then(checkResponse);
}

export {getData, order}