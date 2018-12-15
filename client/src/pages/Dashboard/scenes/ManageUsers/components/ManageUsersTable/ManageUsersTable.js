import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import MuiDataTable from "mui-datatables";

const columns = [
  "Username",
  "Role",
  "Firstname",
  "Lastname",
  "Middlename",
  "Email",
  "Contact",
  "Status",
  "Date Last Logged In",
  "Date Added"
];

export class ManageUsersTable extends Component {
  render() {
    const { users } = this.props;

    // >>> Convert users object to array that MuiDataTable can use
    const data = users.map(user => [
      user.username,
      user.role,
      user.firstName,
      user.lastName,
      user.middleName,
      user.email,
      user.contact,
      user.isActive ? "Active" : "Inactive",
      "TODO",
      user.dateAdded
    ]);

    return (
      <Paper>
        <MuiDataTable title={"Users"} columns={columns} data={data} />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.admin.users
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsersTable);
