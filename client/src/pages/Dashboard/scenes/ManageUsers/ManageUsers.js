import React, { Component, Fragment } from "react";
import ManageUsersTable from "./components/ManageUsersTable/ManageUsersTable";

export class ManageUsers extends Component {
  render() {
    return (
      <Fragment>
        <ManageUsersTable />
      </Fragment>
    );
  }
}

export default ManageUsers;
