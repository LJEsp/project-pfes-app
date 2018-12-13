import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Divider,
  TextField,
  Grid,
  MenuItem,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  form: {
    marginBottom: theme.spacing.unit * 4
  },
  formGroup: {
    marginBottom: theme.spacing.unit
  },
  textInputs: {
    marginTop: "-8px"
  }
});

export class CreateUserDialog extends Component {
  render() {
    const {
      classes,
      isCreateUserDialogOpen,
      CreateUserDialogToggle
    } = this.props;

    return (
      <Dialog
        open={isCreateUserDialogOpen}
        onClose={CreateUserDialogToggle}
        aria-labelledby="create-dialog"
        maxWidth="sm"
        fullWidth
        scroll="body"
      >
        <DialogTitle id="create-dialog" disableTypography>
          <Typography variant="h4" color="primary">
            Create New User
          </Typography>
        </DialogTitle>

        <DialogContent>
          <form className={classes.form}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">User Role</FormLabel>

              <RadioGroup
                aria-label="User role"
                name="userRole"
                // value={}
                // onChange={}
                row
              >
                <FormControlLabel
                  label="Administrator"
                  value="administrator"
                  control={<Radio color="primary" />}
                />

                <FormControlLabel
                  label="Sales"
                  value="sales"
                  control={<Radio color="primary" />}
                />

                <FormControlLabel
                  label="Operations"
                  value="operations"
                  control={<Radio color="primary" />}
                />
              </RadioGroup>
            </FormControl>

            <Grid container className={classes.textInputs}>
              <Grid item xs={12}>
                <TextField label="Username" margin="normal" fullWidth />
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={4}>
                  <TextField label="First Name" margin="normal" fullWidth />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField label="Middle Name" margin="normal" fullWidth />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField label="Last Name" margin="normal" fullWidth />
                </Grid>
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email" margin="normal" fullWidth />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField label="Contact Number" margin="normal" fullWidth />
                </Grid>
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    margin="normal"
                    type="password"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    margin="normal"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </form>

          <DialogActions>
            <Button
              variant="outlined"
              color="inherit"
              onClick={CreateUserDialogToggle}
            >
              Cancel
            </Button>

            <Button variant="contained" color="primary">
              Create User
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CreateUserDialog);
