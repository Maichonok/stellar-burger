import Cookies from "js-cookie";
import { TIngredient } from "../services/models/ingredients";
import { User } from "../services/models/authentication";
const BASE_URL = "https://norma.nomoreparties.space/api";
const AUTH_BASE_URL = `${BASE_URL}/auth`;

type Tokens = {
  refreshToken: string;
  accessToken: string;
};

interface FetchOptions {
  method?: string;
  headers?: any;
  body?: any;
}

const setCookies = ({ refreshToken, accessToken }: Tokens) => {
  const inTwentyMinutes = new Date(new Date().getTime() + 20 * 60 * 1000);
  Cookies.set("refreshToken", refreshToken, { expires: inTwentyMinutes });
  Cookies.set("accessToken", accessToken, { expires: inTwentyMinutes });
};

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
    authorization: "",
  },
};

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

function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((t) => {
    return Promise.reject(new Error(`${t.message}`));
  });
}

const request = (
  url: string,
  options: FetchOptions = {},
  checkToken: boolean = false
) => {
  if (checkToken) {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (!!accessToken) {
      // we assume it is valid token
      options.headers.authorization = accessToken;
    } else {
      // otherwise prolong or reject completely
      // should prolong
      if (refreshToken) {
        fetch(token.url, {
          ...token,
          body: JSON.stringify({
            token: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setCookies(data);
            options.headers.authorization = data.accessToken;
          });
      } else {
        // completely new visitor
        return Promise.reject(new Error(`Access token should be provided`));
      }
    }
  }

  return fetch(url, options).then(checkResponse);
};

const getData = () => request(`${ingredientsConfig.url}`);

const order = (ingredients: Array<TIngredient>) =>
  request(
    orderConfig.url,
    {
      ...orderConfig,
      body: JSON.stringify({ ingredients }),
    },
    true
  );

const registerRequest = (name: string, email: string, pass: string) =>
  request(register.url, {
    ...register,
    body: JSON.stringify({
      email: email,
      password: pass,
      name: name,
    }),
  }).then((res) => {
    setCookies(res);
    return res;
  });

const loginRequest = (email: string, pass: string) =>
  request(login.url, {
    ...login,
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  }).then((res) => {
    setCookies(res);
    return res;
  });

const restorePassword = (email: string) =>
  request(passwordRestore.url, {
    ...passwordRestore,
    body: JSON.stringify({
      email,
    }),
  });

const resetPassword = (pass: string, code: string) =>
  request(passwordReset.url, {
    ...passwordReset,
    body: JSON.stringify({
      password: pass,
      token: code,
    }),
  });

const fetchUserData = () =>
  request(
    userData.url,
    {
      ...userData,
    },
    true
  );

const updateUserData = (data: User) => {
  return request(userData.url, {
    ...userData,
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

const logoutRequest = () => {
  const token = Cookies.get("refreshToken");
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");

  return request(logout.url, {
    ...logout,
    body: JSON.stringify({
      token,
    }),
  });
};

export {
  getData,
  order,
  registerRequest,
  loginRequest,
  restorePassword,
  resetPassword,
  fetchUserData,
  logoutRequest,
  updateUserData,
};
