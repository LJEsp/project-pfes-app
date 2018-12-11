// auth

// import {} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}
