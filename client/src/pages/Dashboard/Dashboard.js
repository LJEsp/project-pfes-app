import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";

import { Alert } from "components";
import Header from "./components/Header/Header";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import JobOrders from "./scenes/JobOrders/JobOrders";
import ManageUsers from "./scenes/ManageUsers/ManageUsers";

import { clearUserErrors } from "services/session/actions/adminActions";

import { viewEnums } from "../../services/enums";

const drawerWidth = 230;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appDrawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  mainSection: {
    width: "100%",
    marginTop: 69,
    padding: theme.spacing.unit,
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 230px)"
    }
  }
});

class Dashboard extends Component {
  constructor(props) {
    super();
    if (props.auth.isAuthenticated) {
      props.history.push(viewEnums.properties[props.currentView].route);
    } else {
      props.history.push("/");
    }
  }

  state = {
    isMobileOpen: false,
    isCreateDialogOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  render() {
    const { classes, match, location } = this.props;
    const { isCreateDialogOpen } = this.state;

    return (
      <div className={classes.root}>
        <nav className={classes.appDrawer}>
          <AppDrawer
            isMobileOpen={this.state.isMobileOpen}
            drawerToggle={this.handleDrawerToggle}
          />
        </nav>

        <Header
          drawerToggle={this.handleDrawerToggle}
          createDialogToggle={this.handleCreateDialogToggle}
          toggleCreateUserDialog={this.handleToggleCreateUserDialog}
          location={location}
        />

        <div className={classes.mainSection}>
          <Route
            path={`${match.url}/my-job-orders`}
            render={props => (
              <JobOrders
                {...props}
                isCreateDialogOpen={isCreateDialogOpen}
                createDialogToggle={this.handleCreateDialogToggle}
              />
            )}
          />

          <Route
            path={`${match.url}/manage-users`}
            component={ManageUsers}
          />
        </div>

        <Alert />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentView: state.app.currentView,
  auth: state.auth
});

const mapDispatchToProps = {
  clearUserErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
