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
  divider: {
    marginBottom: theme.spacing.unit * 2
  },
  formGroup: {
    marginBottom: theme.spacing.unit
  }
});

export class CreateDialog extends Component {
  render() {
    const { classes, isCreateDialogOpen, createDialogToggle } = this.props;

    return (
      <Dialog
        open={isCreateDialogOpen}
        onClose={createDialogToggle}
        aria-labelledby="create-dialog"
        maxWidth="md"
        fullWidth
        scroll="body"
      >
        <DialogTitle id="create-dialog" disableTypography>
          <Typography variant="h4" color="primary">
            New Job Order
          </Typography>
        </DialogTitle>

        <DialogContent>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Domestic / International</FormLabel>

            <RadioGroup
              aria-label="Job order type"
              name="jobOrderType"
              // value={}
              // onChange={}
              row
            >
              <FormControlLabel
                label="Domestic"
                value="domestic"
                control={<Radio color="primary" />}
              />

              <FormControlLabel
                label="International"
                value="international"
                control={<Radio color="primary" />}
              />
            </RadioGroup>
          </FormControl>

          <Divider className={classes.divider} />

          {/* //////////// CONTACT DETAILS //////////// */}

          <FormControl component="fieldset" fullWidth>
            <Typography variant="h5">Contact Details</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item xs={12} sm={4}>
                <TextField label="Contact Name" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Contact Number" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Contact Email" margin="normal" fullWidth />
              </Grid>
            </Grid>
          </FormControl>

          {/* <Divider className={classes.divider} /> */}

          {/* //////////// JOB ORDER DETAILS //////////// */}

          <FormControl fullWidth={true} component="fieldset">
            <Typography variant="h5">Job Order Details</Typography>

            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Shipper/Consignee"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mode of Transport"
                  margin="normal"
                  select
                  fullWidth
                  value="Truck"
                  // value={this.state.modeOfTransport}
                  // onChange={this.handleChange("modeOfTransport")}
                >
                  {["Truck", "Sea", "Air"].map(item => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid container item xs={12} sm={6}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Container"
                    select
                    margin="normal"
                    fullWidth
                    value="Truck"
                  >
                    {["Truck", "Sea", "Air"].map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField label="Commodity" margin="normal" fullWidth />
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bill of Lading Number"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>

            {/* //////////// ORIGIN ADDRESS, DESTINATION ADDRESS //////////// */}

            <Typography variant="h6">Origin Address</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item xs={12} sm={4}>
                <TextField label="Location" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Province" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Municipality/City"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Typography variant="h6">Destination Address</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item xs={12} sm={4}>
                <TextField label="Location" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Province" margin="normal" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Municipality/City"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
          </FormControl>

          {/* <Divider className={classes.divider} /> */}

          {/* //////////// PICKUP DATE, ETD, ETA //////////// */}

          <Typography variant="h6">Dates</Typography>

          <Grid container spacing={16} className={classes.formGroup}>
            <Grid item xs={12} sm={4}>
              <TextField
                id="pickupDate"
                label="Pickup Date"
                type="date"
                // defaultValue="today"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="etd"
                label="ETD"
                type="date"
                // defaultValue="today"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="eta"
                label="ETA"
                type="date"
                // defaultValue="today"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Typography variant="h5">Remarks</Typography>

          <Grid container spacing={16} className={classes.formGroup}>
            <Grid item xs={12}>
              <TextField
                id="remarks"
                margin="normal"
                multiline
                rows="2"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <DialogActions>
            <Button
              variant="outlined"
              color="inherit"
              onClick={createDialogToggle}
            >
              Cancel
            </Button>

            <Button variant="contained" color="primary">
              Create Job Order
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CreateDialog);
