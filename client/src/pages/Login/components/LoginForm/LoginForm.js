import React, { Component, Fragment } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { LoadingSpinner } from "components";

import { connect } from "react-redux";
import { logInUser } from "../../../../services/session/actions/authActions";

const styles = theme => ({
  headingContainer: {
    marginBottom: theme.spacing.unit
  },
  formContainer: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit,
    display: "flex",
    flexFlow: "column",
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  passwordField: {
    marginBottom: theme.spacing.unit * 2
  }
});

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = () => e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogIn = () => e => {
    e.preventDefault();

    this.props.logInUser({
      username: this.state.username,
      password: this.state.password
    });
  };

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
            fullWidth
            margin="normal"
            variant="outlined"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange()}
          />

          <TextField
            className={classes.passwordField}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange()}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={this.handleLogIn()}
          >
            <LoadingSpinner />
          </Button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logInUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
