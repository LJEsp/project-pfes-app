import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import JobOrders from "./scenes/JobOrders/JobOrders";
import ManageUsers from "./scenes/ManageUsers/ManageUsers";

const drawerWidth = 250;

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
  state = {
    isMobileOpen: false,
    isCreateDialogOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  handleCreateDialogToggle = () => {
    this.setState(state => ({ isCreateDialogOpen: !state.isCreateDialogOpen }));
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

          <Route path={`${match.url}/manage-users`} component={ManageUsers} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
