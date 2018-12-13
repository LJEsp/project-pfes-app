import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { AUTH_USER_SET } from "./types.js";

export const logInUser = userData => dispatch => {
  axios.post("/api/users/login", userData).then(res => {
    // Save to localStorage
    const { token } = res.data;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));

    console.log(decoded);
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

export const logoutUser = () => {};
