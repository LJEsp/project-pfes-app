import React, { Component, Fragment } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  headingContainer: {
    marginBottom: theme.spacing.unit
  },
  formContainer: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit,
    display: "flex",
    flexFlow: "column"
  },
  passwordField: {
    marginBottom: theme.spacing.unit * 2
  }
});

class LoginForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.headingContainer}>
          <Typography variant="h2" align="center">
            Welcome
          </Typography>

          <Typography variant="h6" align="center" gutterBottom>
            Log in to your PFES account
          </Typography>
        </div>

        <form className={classes.formContainer}>
          <TextField
            label="Username"
            // value={this.state.username}
            // onChange={}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            className={classes.passwordField}
            label="Password"
            // value={this.state.username}
            // onChange={}
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button variant="contained" color="primary">
            Log in
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LoginForm);
