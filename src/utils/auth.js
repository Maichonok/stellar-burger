import Cookes from "js-cookie";

export const isLoggedIn = () => {
  return !!Cookes.get("accessToken");
};
