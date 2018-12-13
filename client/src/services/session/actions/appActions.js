import { APP_VIEW_CHANGE } from "./types";

export const changeView = view => dispatch => {
  dispatch({
    type: APP_VIEW_CHANGE,
    payload: view
  });
};
