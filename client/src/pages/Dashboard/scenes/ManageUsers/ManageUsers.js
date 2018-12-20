import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { LinearProgress } from "@material-ui/core";
// >>> This is a relative import. I enabled absolute imports to make importing easier.
// import { getAllUsers } from "../../../../services/session/actions/adminActions";
import { getAllUsers } from "services/session/actions/adminActions";

import ManageUsersTable from "./components/ManageUsersTable/ManageUsersTable";
import CreateUserDialog from "./components/CreateUserDialog/CreateUserDialog";

export class ManageUsers extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { isCreateUserDialogOpen, toggleCreateUserDialog } = this.props;

    return (
      <Fragment>
        <ManageUsersTable />

        <CreateUserDialog
          isCreateUserDialogOpen={isCreateUserDialogOpen}
          toggleCreateUserDialog={toggleCreateUserDialog}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsers);
