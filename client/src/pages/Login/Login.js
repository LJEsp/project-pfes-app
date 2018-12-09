import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  MenuList,
  MenuItem,
  AppBar,
  Toolbar,
  Drawer,
  Card,
  CardContent,
  CardActions,
  TextField,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import LoginForm from "./components/LoginForm/LoginForm";

import pfesLogo from "./pfes-logo.png";

const styles = theme => ({
  root: {
    margin: "0 auto",
    height: "90vh",
    width: "80%"
  },
  loginForm: {
    width: "80%"
  },
  logoImg: {
    width: "auto",
    height: "auto"
  }
});

class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={6} container justify="center" alignItems="center">
            <img className={classes.logoImg} src={pfesLogo} alt="PFES logo" />
          </Grid>

          <Grid item xs={6} container justify="center" alignItems="center">
            <div className={classes.loginForm}>
              <LoginForm />
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Login);
