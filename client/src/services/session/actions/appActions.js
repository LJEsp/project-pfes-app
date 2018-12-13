import { VIEW_CHANGE } from "./types";

export const changeView = view => dispatch => {
  dispatch({
    type: VIEW_CHANGE,
    payload: view
  });
};
