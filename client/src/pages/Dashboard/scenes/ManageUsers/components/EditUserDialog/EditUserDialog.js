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
import { closeEditUserDialog } from "services/session/actions/adminActions";

export class EditUserDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      username: "",
      role: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      contact: "",
      isActive: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.adminUserEdit.selected._id !== prevState._id) {
      return {
        _id: nextProps.adminUserEdit.selected._id,
        username: nextProps.adminUserEdit.selected.username,
        role: nextProps.adminUserEdit.selected.role,
        firstName: nextProps.adminUserEdit.selected.firstName,
        middleName: nextProps.adminUserEdit.selected.middleName,
        lastName: nextProps.adminUserEdit.selected.lastName,
        email: nextProps.adminUserEdit.selected.email,
        contact: nextProps.adminUserEdit.selected.contact,
        isActive: nextProps.adminUserEdit.selected.isActive
      };
    }
    return null;
  }

  render() {
    // >>> Redux
    const {
      adminUserEdit: { isEditUserDialogOpen, selected },
      closeEditUserDialog
    } = this.props;

    console.log(this.state);

    return (
      <Dialog
        open={isEditUserDialogOpen}
        onClose={closeEditUserDialog}
        maxWidth="sm"
        fullWidth
        scroll="body"
      >
        <div>{this.state.username}</div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  adminUserEdit: state.admin.user.edit
});

const mapDispatchToProps = {
  closeEditUserDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserDialog);
