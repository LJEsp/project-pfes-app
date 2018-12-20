// auth

import {
  AUTH_USER_SET,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGIN_ERROR,
  AUTH_USER_LOGOUT
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        errors: {}
      };

    case AUTH_USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };

    case AUTH_USER_SET:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false
      };

    case AUTH_USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
}
