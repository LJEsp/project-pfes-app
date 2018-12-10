import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class Header extends Component {
  render() {
    const { classes, drawerToggle } = this.props;

    return (
      <AppBar position="fixed" className={classes.appBar}>
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
            PFES App
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
