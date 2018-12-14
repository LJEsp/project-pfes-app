// auth

import { AUTH_USER_SET, AUTH_USER_LOGOUT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SET:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
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
