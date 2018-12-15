import axios from "axios";

import { ADMIN_USERS_GET_ALL } from "./types";

export const getAllUsers = () => dispatch => {
  axios.get("/api/users/all").then(res => {
    dispatch({
      type: ADMIN_USERS_GET_ALL,
      payload: res.data
    });
  });
};

export const createUser = userData => dispatch => {
  axios.post("/api/users/register", userData).then(res => {});
};
