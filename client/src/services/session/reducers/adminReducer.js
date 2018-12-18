import { ADMIN_USERS_GET_ALL, ADMIN_USERS_FETCH_ALL } from "../actions/types";

// users

const initialState = {
  users: {
    isLoading: false,
    list: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_USERS_FETCH_ALL:
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true
        }
      };

    case ADMIN_USERS_GET_ALL:
      return {
        ...state,
        users: {
          list: action.payload,
          isLoading: false
        }
      };

    default:
      return state;
  }
}
