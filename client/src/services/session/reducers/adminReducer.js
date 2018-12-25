import {
  ADMIN_USERS_GET_ALL,
  ADMIN_USERS_FETCH_ALL,
  ADMIN_USER_CREATE_OPEN,
  ADMIN_USER_CREATE_SUBMIT,
  ADMIN_USER_CREATE_SUBMIT_ERROR,
  ADMIN_USER_CREATE_SUBMIT_SUCCESS,
  ADMIN_USER_ERRORS_CLEAR,
  ADMIN_USER_SELECT,
  ADMIN_USER_SELECT_SUCCESS,
  ADMIN_USER_SELECT_ERROR,
  ADMIN_USER_EDIT_SUBMIT_SUCCESS,
  ADMIN_USER_EDIT_SUBMIT_ERROR,
  ADMIN_USER_EDIT_CLOSE,
  ADMIN_USER_CREATE_CLOSE,
  ADMIN_USER_EDIT_SUBMIT
} from "../actions/types";

// users

const initialState = {
  user: {
    edit: {
      isEditUserDialogOpen: false,
      selected: {
        _id: "",
        username: "",
        role: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        contact: "",
        isActive: true
      },
      isLoading: false,
      errors: {}
    },
    create: {
      isCreateUserDialogOpen: false,
      isLoading: false,
      errors: {}
    },
    isLoading: false
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
    // ----------> create
    case ADMIN_USER_CREATE_OPEN:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            ...state.user.create,
            isCreateUserDialogOpen: true,
            errors: {}
          }
        }
      };
    case ADMIN_USER_CREATE_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            ...state.user.create,
            errors: {},
            isLoading: true
          }
        }
      };
    case ADMIN_USER_CREATE_SUBMIT_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            ...state.user.create,
            errors: action.payload,
            isLoading: false
          }
        }
      };
    case ADMIN_USER_CREATE_SUBMIT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            isCreateUserDialogOpen: false,
            errors: {},
            isLoading: false
          }
        }
      };
    case ADMIN_USER_CREATE_CLOSE:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            ...state.user.create,
            isCreateUserDialogOpen: false
          }
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
            isEditUserDialogOpen: true
          },
          isLoading: true
        }
      };
    case ADMIN_USER_SELECT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            selected: action.payload
          },
          isLoading: false
        }
      };
    // case ADMIN_USER_SELECT_ERROR:
    // ----------> edit
    case ADMIN_USER_EDIT_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            errors: {},
            isLoading: true
          }
        }
      };

    case ADMIN_USER_EDIT_SUBMIT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            isEditUserDialogOpen: false,
            errors: {},
            isLoading: false
          }
        }
      };

    case ADMIN_USER_EDIT_SUBMIT_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            errors: action.payload,
            isLoading: false
          }
        }
      };

    case ADMIN_USER_EDIT_CLOSE:
      return {
        ...state,
        user: {
          ...state.user,
          edit: {
            ...state.user.edit,
            isEditUserDialogOpen: false,
            errors: {}
          }
        }
      };

    // ----------> errors
    case ADMIN_USER_ERRORS_CLEAR:
      return {
        ...state,
        user: {
          ...state.user,
          create: {
            ...state.user.create,
            errors: {}
          },
          edit: {
            ...state.user.edit,
            errors: {}
          }
        }
      };

    default:
      return state;
  }
}
