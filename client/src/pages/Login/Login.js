import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import LoginForm from "./components/LoginForm/LoginForm";

import pfesLogo from "../../assets/img/pfes-logo.png";

const styles = theme => ({
  root: {
    height: "100vh",
    margin: "0 auto",
    position: "relative"
    // backgroundImage: `linear-gradient(to top, ${
    //   theme.palette.primary.main
    // }, white)`
    // backgroundImage: `url(${bg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "bottom"
  },
  logo: {
    width: "300px",
    height: "auto",
    marginBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down("xs")]: {
      width: "150px"
    }
  },
  loginForm: {
    width: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
  }
});

class Login extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/app");
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid
          container
          className={classes.root}
          direction="column"
          wrap="nowrap"
          justify="center"
          alignItems="center"
        >
          <img className={classes.logo} src={pfesLogo} alt="PFES logo" />

          <div className={classes.loginForm}>
            <LoginForm />
          </div>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
