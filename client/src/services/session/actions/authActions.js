import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { AUTH_USER_SET, AUTH_USER_LOGOUT, APP_VIEW_CHANGE } from "./types.js";
import { roleEnums } from "../../enums";

export const logInUser = userData => dispatch => {
  axios.post("/api/users/login", userData).then(res => {
    // >>> Save to localStorage
    const { token } = res.data;
    // >>> Set token to ls
    localStorage.setItem("jwtToken", token);
    // >>> Set token to Auth header
    setAuthToken(token);
    // >>> Decode token to get user data
    const decoded = jwt_decode(token);
    // >>> Set current user

    dispatch(setCurrentUser(decoded));

    window.location.href = "/app";
  });
  // .catch(err => {
  //   dispatch({
  //     type: ERROR_SET,
  //     payload: err.response.data
  //   });
  // });
};

export const setCurrentUser = decoded => {
  return {
    type: AUTH_USER_SET,
    payload: decoded
  };
};

export const logOutUser = () => dispatch => {
  // >>> Remove token from localStorage
  localStorage.removeItem("jwtToken");

  // >>> Remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({ role: roleEnums.UNAUTHORIZED }));

  window.location.href = "/";

  dispatch({ type: AUTH_USER_LOGOUT });
};

