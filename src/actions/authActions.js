import { CHANGE_AUTH } from "../constants/authConstants";

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
