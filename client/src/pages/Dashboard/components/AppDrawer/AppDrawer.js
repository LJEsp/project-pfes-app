import React, { Fragment } from "react";
import {
  Drawer,
  Hidden,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Avatar
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import pfesLogo from "../../../../assets/img/pfes-logo.png";

import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { connect } from "react-redux";
import { changeView } from "../../../../services/session/actions/appActions";
import { viewEnums } from "../../../../services/enums";

const drawerWidth = 250;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth
  },
  drawerContents: {
    paddingTop: theme.spacing.unit * 2
  },
  logo: {
    width: "50%",
    height: "auto",
    alignSelf: "center",
    marginBottom: theme.spacing.unit
  },
  infoContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2
  },
  chipIcon: {
    marginLeft: theme.spacing.unit
  },
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $menuIcon, & $menuText": {
        color: "white"
      }
    }
  },
  menuIcon: {},
  menuText: {}
});

class AppDrawer extends React.Component {
  render() {
    // HOC
    const { classes, theme } = this.props;
    // Props
    const { isMobileOpen, drawerToggle } = this.props;
    // Actions
    const { changeView } = this.props;

    const drawerContents = (
      <Grid
        container
        alignItems="stretch"
        justify="flex-start"
        direction="column"
        className={classes.drawerContents}
      >
        <img src={pfesLogo} alt="PFES logo" className={classes.logo} />

        <div className={classes.infoContainer}>
          <Typography variant="h5" align="center" gutterBottom>
            Tilda Swinton
          </Typography>

          <Chip
            icon={<BuildIcon className={classes.chipIcon} fontSize="small" />}
            label="Administrator"
            color="primary"
          />
        </div>

        <Divider />

        <List component="nav">
          <Link
            to="/app/my-job-orders"
            onClick={() => changeView(viewEnums.MY_JOB_ORDERS)}
          >
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.menuIcon}>
                <WorkIcon />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.menuText }}
                primary="My Job Orders"
              />
            </ListItem>
          </Link>

          <Link
            to="/app/all-job-orders"
            onClick={() => changeView(viewEnums.ALL_JOB_ORDERS)}
          >
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.menuIcon}>
                <GroupIcon />
              </ListItemIcon>

              <ListItemText
                primary="All Job Orders"
                classes={{ primary: classes.menuText }}
              />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List component="nav">
          <Link
            to="/app/manage-users"
            onClick={() => changeView(viewEnums.MANAGE_USERS)}
          >
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.menuIcon}>
                <AccountCircleIcon />
              </ListItemIcon>

              <ListItemText
                primary="Manage Users"
                classes={{ primary: classes.menuText }}
              />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>

            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Grid>
    );

    return (
      <Fragment>
        {/* Drawer for mobile */}
        <Hidden mdUp>
          <Drawer
            container={this.props.container}
            variant="temporary"
            open={isMobileOpen}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
            onClose={drawerToggle}
          >
            {drawerContents}
          </Drawer>
        </Hidden>

        {/* Drawer for desktop */}
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawerContents}
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  changeView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AppDrawer));
