// auth

import { AUTH_USER_SET } from "../actions/types";

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

    default:
      return state;
  }
}
