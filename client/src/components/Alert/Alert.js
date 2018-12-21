import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";

import { closeAlert } from "services/session/actions/appActions";

const variantIcon = {
  SUCCESS: <CheckCircleIcon />,
  WARNING: <WarningIcon />,
  ERROR: <ErrorIcon />,
  INFO: <InfoIcon />
};

const styles = theme => ({
  alert: {
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing.unit * 2
    }
  },
  SUCCESS: {
    backgroundColor: green[600]
  },
  WARNING: {
    backgroundColor: amber[700]
  },
  ERROR: {
    backgroundColor: theme.palette.error.dark
  },
  INFO: {
    backgroundColor: theme.palette.primary.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  messageText: {
    marginLeft: theme.spacing.unit
  }
});

export class Alert extends Component {
  render() {
    // >>> HOC
    const { classes } = this.props;

    // >>> Redux
    const { appAlert, closeAlert } = this.props;

    const Icon = variantIcon[appAlert.status];

    return (
      <Snackbar
        className={classes.alert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={appAlert.isOpen}
        autoHideDuration={6000}
        onClose={closeAlert}
        // message={<span id="message-id">{appAlert.message}</span>}
        // action={[
        //   <IconButton
        //     key="close"
        //     aria-label="Close"
        //     color="inherit"
        //     // className={classes.close}
        //     onClick={closeAlert}
        //   >
        //     <CloseIcon />
        //   </IconButton>
        // ]}
      >
        <SnackbarContent
          className={classNames(classes[appAlert.status])}
          message={
            <span className={classes.message}>
              {variantIcon[appAlert.status]}{" "}
              <span className={classes.messageText}>{appAlert.message}</span>
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={closeAlert}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>
    );
  }
}

const mapStateToProps = state => ({
  appAlert: state.app.alert
});

const mapDispatchToProps = {
  closeAlert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Alert));
