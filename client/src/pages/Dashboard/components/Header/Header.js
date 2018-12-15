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
  Fab
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { viewEnums } from "../../../../services/enums";

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
  getTitle = () => {
    return viewEnums.properties[this.props.currentView].name;
  };

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
            {this.getTitle()}
          </Typography>

          <Fab
            className={classes.actionButton}
            variant="extended"
            size="large"
            onClick={this.props.createDialogToggle}
          >
            <AddCircleIcon className={classes.actionIcon} /> New Job Order
          </Fab>

          <Button
            className={classes.actionButton}
            onClick={this.props.createDialogToggle}
            variant="contained"
          >
            <AddCircleIcon className={classes.actionIcon} /> New Job Order
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentView: state.app.currentView
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
