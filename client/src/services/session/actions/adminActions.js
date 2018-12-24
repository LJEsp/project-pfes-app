import axios from "axios";

import {
  ADMIN_USERS_GET_ALL,
  ADMIN_USERS_FETCH_ALL,
  ADMIN_USER_SUBMIT,
  ADMIN_USER_SUBMIT_ERROR,
  ADMIN_USER_SUBMIT_SUCCESS,
  ADMIN_USER_ERRORS_CLEAR,
  ADMIN_USER_SELECT,
  ADMIN_USER_SELECT_SUCCESS,
  ADMIN_USER_EDIT_CLOSE
} from "./types";

export const getAllUsers = () => dispatch => {
  dispatch({
    type: ADMIN_USERS_FETCH_ALL
  });

  axios.get("/api/users/all").then(res => {
    dispatch({
      type: ADMIN_USERS_GET_ALL,
      payload: res.data
    });
  });
};

// >>> This will return a promise to the component :)
export const createUser = userData => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: ADMIN_USER_SUBMIT
    });

    axios
      .post("/api/users/register", userData)
      .then(res => {
        dispatch(getAllUsers());

        dispatch({
          type: ADMIN_USER_SUBMIT_SUCCESS,
          payload: res.data
        });

        resolve(userData);
      })
      .catch(err => {
        dispatch({
          type: ADMIN_USER_SUBMIT_ERROR,
          payload: err.response.data
        });

        reject(err.response.data);
      });
  });
};

// >>> Clear create user errors
export const clearUserErrors = () => dispatch => {
  dispatch({
    type: ADMIN_USER_ERRORS_CLEAR
  });
};

// >>> Edit User
export const selectUser = userId => dispatch => {
  dispatch({
    type: ADMIN_USER_SELECT
  });

  axios.get(`/api/users/${userId}`).then(res => {
    dispatch({
      type: ADMIN_USER_SELECT_SUCCESS,
      payload: res.data
    });
  });
};
export const closeEditUserDialog = () => dispatch => {
  dispatch({
    type: ADMIN_USER_EDIT_CLOSE
  });
};
