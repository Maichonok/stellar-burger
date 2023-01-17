import Cookies from "js-cookie";

export const isLoggedIn = () => {
  return !!Cookies.get("accessToken");
};

export const getToken = () => {
  return Cookies.get("accessToken");
}