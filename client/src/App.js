import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import "typeface-roboto";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/session/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./services/utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./services/session/actions";

import { Login, Dashboard } from "./pages";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Log out user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}

const styles = theme => ({
  "@global": {
    a: {
      textDecoration: "none",
      color: "inherit"
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Login} />

            <Route path="/app" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withRoot(withStyles(styles)(App));
