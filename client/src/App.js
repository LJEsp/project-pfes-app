import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import "typeface-roboto";

import { Login } from "./pages";

const styles = theme => ({});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Login />
      </Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(App));
