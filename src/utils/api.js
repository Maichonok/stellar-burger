const BASE_URL = "https://norma.nomoreparties.space/api";
const AUTH_BASE_URL = "https://norma.nomoreparties.space/api/auth";

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

const register = {
  url: `${AUTH_BASE_URL}/register`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const login = {
  url: `${AUTH_BASE_URL}/login`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const reset = {
  url: `${BASE_URL}/password-reset`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const token = {
  url: `${AUTH_BASE_URL}/token`,
  method: "POST",
  headers: {
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

const registerRequest = (name, email, pass) =>
  request(register.url, {
    ...register,
    body: JSON.stringify({
      email: email,
      password: pass,
      name: name,
    }),
  });

  const loginRequest = (email, pass) =>
  request(login.url, {
    ...login,
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  });

  const resetPassword = email => 
  request(reset.url, {
    ...reset,
    body: JSON.stringify({
      email
    })
  });
  

  const refreshToken = (token) =>
  request(token.url, {
    ...login,
    body: JSON.stringify({
      token: token,
    }),
  });

export { getData, order, registerRequest, loginRequest, refreshToken, resetPassword };
