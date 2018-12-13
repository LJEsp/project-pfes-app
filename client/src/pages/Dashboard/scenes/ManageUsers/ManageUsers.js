import React, { Component, Fragment } from "react";
import ManageUsersTable from "./components/ManageUsersTable/ManageUsersTable";
import CreateUserDialog from "./components/CreateUserDialog/CreateUserDialog";

export class ManageUsers extends Component {
  render() {
    const { isCreateUserDialogOpen, createUserDialogToggle } = this.props;

    return (
      <Fragment>
        <ManageUsersTable />

        <CreateUserDialog
          isCreateUserDialogOpen={isCreateUserDialogOpen}
          createUserDialogToggle={createUserDialogToggle}
        />
      </Fragment>
    );
  }
}

export default ManageUsers;
