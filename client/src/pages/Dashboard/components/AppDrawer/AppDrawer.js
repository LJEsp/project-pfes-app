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

import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { withStyles } from "@material-ui/core/styles";
import pfesLogo from "../../../../assets/img/pfes-logo.png";

const drawerWidth = 250;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth
  },
  drawerContents: {
    paddingTop: theme.spacing.unit
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
  }
});

class AppDrawer extends React.Component {
  render() {
    const { classes, theme, isMobileOpen, drawerToggle } = this.props;

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
            icon={<BuildIcon fontSize="small" />}
            label="Administrator"
            color="primary"
          />
        </div>

        <Divider />

        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>

            <ListItemText primary="My Job Orders" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>

            <ListItemText primary="All Job Orders" />
          </ListItem>
        </List>

        <Divider />

        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>

            <ListItemText primary="Manage Users" />
          </ListItem>
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

export default withStyles(styles, { withTheme: true })(AppDrawer);
