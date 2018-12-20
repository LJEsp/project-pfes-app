import React, { Component, Fragment } from "react";
import isEmpty from "lodash.isempty";
import {
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
    const {
      classes,
      auth: { isLoading, user, errors }
    } = this.props;

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
            error={!isEmpty(errors)}
            disabled={isLoading}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            name="password"
            className={classes.passwordField}
            value={this.state.password}
            onChange={this.handleInputChange()}
            error={!isEmpty(errors)}
            helperText={!isEmpty(errors) ? errors.login : null}
            disabled={isLoading}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading}
            onClick={this.handleLogIn()}
          >
            {isLoading ? <CircularProgress size={20} /> : "Log In"}
          </Button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logInUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
