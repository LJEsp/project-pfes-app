// app

import {
  APP_VIEW_CHANGE,
  AUTH_USER_SET,
  APP_ALERT_CLOSE,
  ADMIN_USER_SUBMIT_SUCCESS,
  ADMIN_USER_SUBMIT_ERROR
} from "../actions/types";
import { roleEnums } from "../../enums";

const alertStatusEnums = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
  INFORMATION: "INFORMATION"
};

const initialState = {
  currentView: "LOGIN",
  alert: {
    isOpen: false,
    message: "",
    status: ""
  }

  // isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    // >>> APP
    // -----> currentView
    case APP_VIEW_CHANGE:
      return {
        ...state,
        currentView: action.payload
      };

    // -----> alert
    case APP_ALERT_CLOSE:
      return {
        ...state,
        alert: {
          ...state.alert,
          isOpen: false
        }
      };

    // >>> AUTH
    // -----> currentView
    case AUTH_USER_SET:
      return {
        ...state,
        currentView: roleEnums.properties[action.payload.role].defaultView
      };

    // >>> ADMIN
    // -----> alert
    case ADMIN_USER_SUBMIT_SUCCESS:
      return {
        ...state,
        alert: {
          isOpen: true,
          message: `${action.payload.username} was successfully created.`,
          status: alertStatusEnums.SUCCESS
        }
      };

    case ADMIN_USER_SUBMIT_ERROR:
      return {
        ...state,
        alert: {
          isOpen: true,
          message: "An error occurred.",
          status: alertStatusEnums.ERROR
        }
      };

    default:
      return state;
  }
}
