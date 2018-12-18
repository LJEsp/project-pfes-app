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
    const { usersList } = this.props;

    // >>> Convert usersList object to array that MuiDataTable can use
    const data = usersList.map(user => [
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

    const options = {
      filterType: "multicheck",

      responsive: "scroll",
      print: false,
      selectableRows: false
    };

    return (
      <Paper>
        <MuiDataTable
          title={"Users"}
          columns={columns}
          data={data}
          options={options}
        />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.admin.users.list
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsersTable);
