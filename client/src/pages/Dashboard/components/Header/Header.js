import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
  LinearProgress
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { viewEnums } from "../../../../services/enums";

const drawerWidth = 230;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    paddingTop: "4px",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  actionButton: {
    marginLeft: theme.spacing.unit * 2,
    backgroundColor: theme.palette.common.white,
    height: "40px"
  },
  actionIcon: {
    marginRight: theme.spacing.unit
  },
  progressBar: {
    position: "absolute",
    top: "0",
    width: "100%"
  }
});

class Header extends Component {
  getTitle = () => {
    return viewEnums.properties[this.props.currentView].name;
  };

  render() {
    // >>> HOC
    const { classes } = this.props;

    // >>> Parent
    const {
      drawerToggle,
      createDialogToggle,
      toggleCreateUserDialog
    } = this.props;

    // >>> Store
    const { currentView, user, users } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <div className={classes.progressBar}>
          {users.isLoading ? <LinearProgress color="secondary" /> : null}
        </div>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className={classes.menuButton}
            onClick={drawerToggle}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" color="inherit" noWrap>
            {this.getTitle()}
          </Typography>

          {(currentView => {
            switch (currentView) {
              case viewEnums.MY_JOB_ORDERS:
              case viewEnums.ALL_JOB_ORDERS:
                return (
                  <Fab
                    className={classes.actionButton}
                    variant="extended"
                    size="large"
                    onClick={this.props.createDialogToggle}
                  >
                    <AddCircleIcon className={classes.actionIcon} /> Create Job
                    Order
                  </Fab>
                );

              case viewEnums.MANAGE_USERS:
                return (
                  <Fab
                    className={classes.actionButton}
                    variant="extended"
                    size="large"
                    onClick={this.props.toggleCreateUserDialog}
                  >
                    <AddCircleIcon className={classes.actionIcon} /> Create User
                  </Fab>
                );
            }
          })(currentView)}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentView: state.app.currentView,
  users: state.admin.users
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
