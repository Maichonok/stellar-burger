import Cookies from "js-cookie";

export const isLoggedIn = (): boolean => {
  return !!Cookies.get("accessToken");
};

export const getToken = (): string | undefined => {
  return Cookies.get("accessToken");
};

export const getRawToken = (): string => {
  const token = getToken();
  return token ? token.slice(7) : "";
};
