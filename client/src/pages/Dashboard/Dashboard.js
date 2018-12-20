import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";

import Header from "./components/Header/Header";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import JobOrders from "./scenes/JobOrders/JobOrders";
import ManageUsers from "./scenes/ManageUsers/ManageUsers";

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
    marginTop: 64,
    padding: theme.spacing.unit
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
    isCreateDialogOpen: false,
    isCreateUserDialogOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  handleCreateDialogToggle = () => {
    this.setState(state => ({ isCreateDialogOpen: !state.isCreateDialogOpen }));
  };

  handleCreateUserDialogToggle = () => {
    this.setState(state => ({
      isCreateUserDialogOpen: !state.isCreateUserDialogOpen
    }));
  };

  render() {
    const { classes, match, location } = this.props;
    const { isCreateDialogOpen, isCreateUserDialogOpen } = this.state;

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
          createUserDialogToggle={this.handleCreateUserDialogToggle}
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
            render={props => (
              <ManageUsers
                {...props}
                isCreateUserDialogOpen={isCreateUserDialogOpen}
                createUserDialogToggle={this.handleCreateUserDialogToggle}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentView: state.app.currentView,
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dashboard));
