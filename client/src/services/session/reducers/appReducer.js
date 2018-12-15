// app

import { APP_VIEW_CHANGE, AUTH_USER_SET } from "../actions/types";
import { roleEnums } from "../../enums";

const initialState = {
  currentView: "LOGIN",
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APP_VIEW_CHANGE:
      return {
        ...state,
        currentView: action.payload
      };

    case AUTH_USER_SET:
      return {
        ...state,
        currentView: roleEnums.properties[action.payload.role].defaultView
      };

    default:
      return state;
  }
}
