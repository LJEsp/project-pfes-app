import { ADMIN_USERS_GET_ALL } from "../actions/types";

// users

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_USERS_GET_ALL:
      return {
        ...state,
        users: action.payload
      };

    default:
      return state;
  }
}
