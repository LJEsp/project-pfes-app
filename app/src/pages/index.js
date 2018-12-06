import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Button variant="contained" color="primary">
          Hello World test
        </Button>
      </React.Fragment>
    );
  }
}
