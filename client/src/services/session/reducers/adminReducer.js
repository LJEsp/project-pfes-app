import {
  ADMIN_USERS_GET_ALL,
  ADMIN_USERS_FETCH_ALL,
  ADMIN_USER_SUBMIT,
  ADMIN_USER_SUBMIT_ERROR,
  ADMIN_USER_SUBMIT_SUCCESS,
  ADMIN_USER_ERRORS_CLEAR,
  ADMIN_USER_SELECT,
  ADMIN_USER_SELECT_SUCCESS,
  ADMIN_USER_SELECT_ERROR,
  ADMIN_USER_EDIT_CLOSE
} from "../actions/types";

// users

const initialState = {
  user: {
    edit: {
      isEditUserDialogOpen: false,
      selected: {},
      isLoading: false,
      errors: {}
    },
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
    // >>> ADMIN
    // -----> users
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
          ...state.users,
          list: action.payload,
          isLoading: false
        }
      };

    // -----> user
    // ----------> submit
    case ADMIN_USER_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          errors: {},
          isLoading: true
        }
      };
    case ADMIN_USER_SUBMIT_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          errors: action.payload,
          isLoading: false
        }
      };
    case ADMIN_USER_SUBMIT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          errors: {},
          isLoading: false
        }
      };
    // ----------> select
    case ADMIN_USER_SELECT:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            isEditUserDialogOpen: true,
            isLoading: true
          }
        }
      };
    case ADMIN_USER_SELECT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            selected: action.payload,
            isLoading: false
          }
        }
      };
    // case ADMIN_USER_SELECT_ERROR:
    // ----------> edit
    case ADMIN_USER_EDIT_CLOSE:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            selected: {},
            isEditUserDialogOpen: false
          }
        }
      };

    // ----------> errors
    case ADMIN_USER_ERRORS_CLEAR:
      return {
        ...state,
        user: {
          ...state.user,
          errors: {}
        }
      };

    default:
      return state;
  }
}
