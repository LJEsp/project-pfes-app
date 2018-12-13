// app

import { APP_VIEW_CHANGE } from "../actions/types";

const initialState = {
  currentView: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APP_VIEW_CHANGE:
      return {
        ...state,
        currentView: action.payload
      };

    default:
      return state;
  }
}
