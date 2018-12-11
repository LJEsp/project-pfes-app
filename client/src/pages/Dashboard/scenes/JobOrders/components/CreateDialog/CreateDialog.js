import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
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
    const { classes } = this.props;

    return (
      <Dialog
        open
        // onClose={}
        aria-labelledby="create-dialog"
        // maxWidth="lg"
        // fullWidth
        scroll="body"
      >
        <DialogTitle id="create-dialog">New Job Order</DialogTitle>

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

          <FormControl component="fieldset" fullWidth>
            <Typography variant="subtitle2">Contact Details</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item item xs={12} sm={4}>
                <TextField label="Contact Name" margin="dense" fullWidth />
              </Grid>

              <Grid item item xs={12} sm={4}>
                <TextField label="Contact Number" margin="dense" fullWidth />
              </Grid>

              <Grid item item xs={12} sm={4}>
                <TextField label="Contact Email" margin="dense" fullWidth />
              </Grid>
            </Grid>
          </FormControl>

          <Divider className={classes.divider} />

          <FormControl fullWidth={true} component="fieldset">
            <Typography variant="subtitle2">Job Order Details</Typography>

            <Grid container spacing={16}>
              <Grid item xs={12} sm={6}>
                <TextField label="Shipper/Consignee" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mode of Transport"
                  margin="dense"
                  select
                  fullWidth
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
              <Grid item xs={12} sm={6}>
                <TextField label="Commodity" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bill of Lading Number"
                  margin="dense"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Typography variant="subtitle2">Origin Address</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item xs={12} sm={4}>
                <TextField label="Location" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Province" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Municipality/City" margin="dense" fullWidth />
              </Grid>
            </Grid>

            <Typography variant="subtitle2">Destination Address</Typography>

            <Grid container spacing={16} className={classes.formGroup}>
              <Grid item xs={12} sm={4}>
                <TextField label="Location" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Province" margin="dense" fullWidth />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField label="Municipality/City" margin="dense" fullWidth />
              </Grid>
            </Grid>
          </FormControl>

          <DialogActions>
            <Button>Create</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(CreateDialog);
