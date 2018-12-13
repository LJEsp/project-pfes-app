// app

import { VIEW_CHANGE } from "../actions/types";

const initialState = {
  currentView: "",
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEW_CHANGE:
      return {
        ...state,
        currentView: action.payload
      };

    default:
      return state;
  }
}
