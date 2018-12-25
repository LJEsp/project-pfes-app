import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
  Divider,
  TextField,
  Grid,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { roleEnums } from "services/enums";
import {
  createUser,
  closeCreateUserDialog
} from "services/session/actions/adminActions";

const styles = theme => ({
  form: {
    marginBottom: theme.spacing.unit * 4
  },
  formGroup: {
    marginBottom: theme.spacing.unit
  },
  textInputs: {
    marginTop: "-8px"
  },
  createUserButton: {
    position: "relative"
  },
  createUserButtonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

export class CreateUserDialog extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      username: "",
      role: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contact: "",
      password: "",
      password2: ""
    };

    this.state = this.initialState;
  }

  handleInputChange = () => e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.props
      .createUser(this.state)
      .then(user => {
        this.setState(this.initialState, () => {
          this.props.closeCreateUserDialog();
        });
      })
      .catch(err => {});
  };

  render() {
    // >>> HOC
    const { classes } = this.props;

    // >>> Parent
    // const { isCreateUserDialogOpen, toggleCreateUserDialog } = this.props;

    // >>> Redux
    const {
      createUserAdminState: { errors, isLoading, isCreateUserDialogOpen },
      closeCreateUserDialog
    } = this.props;

    return (
      <Dialog
        open={isCreateUserDialogOpen}
        onClose={closeCreateUserDialog}
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
          <form className={classes.form} autoComplete="off">
            <FormControl
              required
              component="fieldset"
              fullWidth
              error={errors.role ? true : false}
              disabled={isLoading}
            >
              <FormLabel component="legend">User Role</FormLabel>

              <RadioGroup
                aria-label="User role"
                name="role"
                value={this.state.role}
                onChange={this.handleInputChange()}
                row
                disabled={isLoading}
              >
                <FormControlLabel
                  label={roleEnums.properties.ADMINISTRATOR.name}
                  value={roleEnums.ADMINISTRATOR}
                  control={<Radio color="primary" />}
                />

                <FormControlLabel
                  label={roleEnums.properties.SALES.name}
                  value={roleEnums.SALES}
                  control={<Radio color="primary" />}
                />

                <FormControlLabel
                  label={roleEnums.properties.OPERATIONS.name}
                  value={roleEnums.OPERATIONS}
                  control={<Radio color="primary" />}
                />

                <FormControlLabel
                  label={roleEnums.properties.VIEWER.name}
                  value={roleEnums.VIEWER}
                  control={<Radio color="primary" />}
                />
              </RadioGroup>

              {errors.role ? (
                <FormHelperText>{errors.role}</FormHelperText>
              ) : null}
            </FormControl>

            <Grid container className={classes.textInputs}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  margin="normal"
                  fullWidth
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange()}
                  disabled={isLoading}
                  error={errors.username ? true : false}
                  helperText={errors.username}
                />
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="First Name"
                    margin="normal"
                    fullWidth
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.firstName ? true : false}
                    helperText={errors.firstName}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Middle Name"
                    margin="normal"
                    fullWidth
                    name="middleName"
                    value={this.state.middleName}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.middleName ? true : false}
                    helperText={errors.middleName}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Last Name"
                    margin="normal"
                    fullWidth
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.lastName ? true : false}
                    helperText={errors.lastName}
                  />
                </Grid>
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    margin="normal"
                    fullWidth
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Contact Number"
                    margin="normal"
                    fullWidth
                    name="contact"
                    value={this.state.contact}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.contact ? true : false}
                    helperText={errors.contact}
                  />
                </Grid>
              </Grid>

              <Grid container item spacing={16}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    margin="normal"
                    type="password"
                    fullWidth
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.password ? true : false}
                    helperText={errors.password}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Confirm Password"
                    margin="normal"
                    type="password"
                    fullWidth
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleInputChange()}
                    disabled={isLoading}
                    error={errors.password2 ? true : false}
                    helperText={errors.password2}
                  />
                </Grid>
              </Grid>
            </Grid>
          </form>

          <DialogActions>
            <Button
              variant="outlined"
              color="inherit"
              onClick={closeCreateUserDialog}
              disabled={isLoading}
            >
              Cancel
            </Button>

            <div className={classes.createUserButton}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => this.handleSubmit()}
                disabled={isLoading}
              >
                Create User
              </Button>

              {isLoading ? (
                <CircularProgress
                  size={24}
                  className={classes.createUserButtonProgress}
                />
              ) : null}
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  createUserAdminState: state.admin.user.create
});

const mapDispatchToProps = { createUser, closeCreateUserDialog };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateUserDialog));
