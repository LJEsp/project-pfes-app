import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import "typeface-roboto";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Login, Dashboard } from "./pages";

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
      <Router>
        <div>
          <Route path="/" exact component={Login} />

          <Route path="/app" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(App));
