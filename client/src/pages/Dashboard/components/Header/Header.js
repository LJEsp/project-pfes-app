import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const drawerWidth = 250;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
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
    backgroundColor: theme.palette.common.white
  },
  actionIcon: {
    marginRight: theme.spacing.unit
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
            My Job Orders
          </Typography>

          <Button
            className={classes.actionButton}
            variant="contained"
            onClick={this.props.createDialogToggle}
          >
            <AddCircleIcon className={classes.actionIcon} /> New Job Order
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
