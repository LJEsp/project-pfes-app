import {
  ADMIN_USERS_GET_ALL,
  ADMIN_USERS_FETCH_ALL,
  ADMIN_USER_SUBMIT,
  ADMIN_USER_SUBMIT_ERROR,
  ADMIN_USER_SUBMIT_SUCCESS,
  ADMIN_USER_ERRORS_CLEAR
} from "../actions/types";

// users

const initialState = {
  user: {
    isLoading: false,
    errors: {}
  },
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

    case ADMIN_USER_SUBMIT:
      return {
        ...state,
        user: {
          errors: {},
          isLoading: true
        }
      };

    case ADMIN_USER_SUBMIT_ERROR:
      return {
        ...state,
        user: {
          errors: action.payload,
          isLoading: false
        }
      };

    case ADMIN_USER_SUBMIT_SUCCESS:
      return {
        ...state,
        user: {
          errors: {},
          isLoading: false
        }
      };

    case ADMIN_USER_ERRORS_CLEAR:
      return {
        ...state,
        user: {
          ...state.user,
          errors: {}
        }
      }

    default:
      return state;
  }
}
