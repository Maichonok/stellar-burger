import jwtDecode from 'jwt-decode';
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

const userData = {
  url: `${AUTH_BASE_URL}/user`,
  headers: {
    "Content-Type": "application/json",
    authorization: ""
  }, 
}

const login = {
  url: `${AUTH_BASE_URL}/login`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const logout = {
  url: `${AUTH_BASE_URL}/logout`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const passwordRestore = {
  url: `${BASE_URL}/password-reset`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const passwordReset = {
  url: `${BASE_URL}/password-reset/reset`,
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
  return res.json().then((t) => {
    return Promise.reject(new Error(`${t.message}`));
  });
}

const request = (url, options, checkToken = false) => {
  if (checkToken) {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (!accessToken) {
      return Promise.reject(new Error(`Access token should be provided`));
    }

    const currentDate = new Date();
    let decoded;
    let invalidToken = false;
    try {
      decoded = jwtDecode(accessToken);
    } catch(e) {
      invalidToken = true;
    }
    if (decoded.exp * 1000 < currentDate.getTime() || invalidToken) {
      fetch(token.url, {
        ...token,
        body: JSON.stringify({
          token: refreshToken
        })
      })
        .then(res => res.json())
        .then((data) => {
          console.log("set new token", data)
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("accessToken", data.accessToken);
        });
    } 
    options.headers.authorization = accessToken;  
  }
 
  return fetch(url, options)
        .then(checkResponse);
}

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
  })
  .then(res => {
    localStorage.setItem("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken)
    return res;
  })

const restorePassword = (email) =>
  request(passwordRestore.url, {
    ...passwordRestore,
    body: JSON.stringify({
      email,
    }),
  });

const resetPassword = (pass, code) =>
  request(passwordReset.url, {
    ...passwordReset,
    body: JSON.stringify({
      password: pass,
      token: code,
    }),
  });

const fetchUserData = () => 
  request(userData.url, {
    ...userData
  }, true);


const updateUserData = data => {
  request(userData.url, {
    ...userData,
    method: 'PATCH',
    body: JSON.stringify(data)
  })
};

const logoutRequest = () => {
  const token = localStorage.getItem("refreshToken");
  localStorage.clear();

  request(logout.url, {
    ...logout,
    body: JSON.stringify({
      token
    })
  })
};


export {
  getData,
  order,
  registerRequest,
  loginRequest,
  restorePassword,
  resetPassword,
  fetchUserData,
  logoutRequest
};
