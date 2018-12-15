import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import "typeface-roboto";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/session/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./services/utils/setAuthToken";

import {
  setCurrentUser,
  logOutUser
} from "./services/session/actions/authActions";

import { Login, Dashboard } from "./pages";

// Check for token
if (localStorage.jwtToken) {
  // >>> Set auth token header
  setAuthToken(localStorage.jwtToken);
  // >>> Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // >>> Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // >>> Log out user
    store.dispatch(logOutUser());

    // >>> Redirect to login
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
    const state = store.getState();
    const isAuthenticated = state.auth.isAuthenticated;

    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              {/* >>> LOGIN */}
              <Route path="/" exact component={Login} />

              {/* >>> DASHBOARD */}
              <Route path="/app" component={Dashboard} />

              {/* >>> 404 */}
              <Route render={() => <h1>Not found</h1>} />
            </Switch>

            {/* <Route
              path="/app"
              render={() =>
                isAuthenticated ? (
                  <Redirect to="/app/my-job-orders" />
                ) : (
                  <Redirect to="/" />
                )
              }
            /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withRoot(withStyles(styles)(App));
