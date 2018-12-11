import React, { Component } from "react";
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
    return (
      <Paper>
        <MuiDataTable title={"Users"} columns={columns} />
      </Paper>
    );
  }
}

export default ManageUsersTable;
