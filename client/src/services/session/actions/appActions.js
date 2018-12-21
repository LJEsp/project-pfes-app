import { APP_VIEW_CHANGE, APP_ALERT_CLOSE } from "./types";

export const changeView = view => dispatch => {
  dispatch({
    type: APP_VIEW_CHANGE,
    payload: view
  });
};

export const closeAlert = () => dispatch => {
  dispatch({
    type: APP_ALERT_CLOSE
  });
};
