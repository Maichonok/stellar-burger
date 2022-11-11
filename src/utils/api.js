const BASE_URL = "https://norma.nomoreparties.space/api";

const ingredientsConfig = {
  url: `${BASE_URL}/ingredients`,
  headers: {
    "Content-Type": "application.json",
  },
};

const orderConfig = {
  url: `${BASE_URL}/orders`,
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`${res.status}`));
}

const request = (url, options) => fetch(url, options).then(checkResponse);

const getData = () => request(`${ingredientsConfig.url}`);

const order = (ingredients) =>
  request(orderConfig.url, {
    ...orderConfig,
    body: JSON.stringify({ ingredients }),
  });

export { getData, order };
