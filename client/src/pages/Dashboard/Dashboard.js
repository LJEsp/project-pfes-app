import React, { Component } from "react";
import Header from "./components/Header/Header";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

class Dashboard extends Component {
  state = {
    isMobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header drawerToggle={this.handleDrawerToggle} />

        <AppDrawer
          isMobileOpen={this.state.isMobileOpen}
          drawerToggle={this.handleDrawerToggle}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
