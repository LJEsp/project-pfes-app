import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import MaterialTable from "material-table";

const columns = [
  {
    title: "Username",
    field: "username",
    filtering: false
  },
  {
    title: "Role",
    field: "role",
    filtering: true
  },
  {
    title: "First Name",
    field: "firstName",
    filtering: false
  },
  {
    title: "Middle Name",
    field: "middleName",
    filtering: false
  },
  {
    title: "Last Name",
    field: "lastName",
    filtering: false
  },
  {
    title: "Email",
    field: "email",
    filtering: false
  },
  {
    title: "Contact",
    field: "contact",
    filtering: false
  },
  {
    title: "Active",
    field: "isActive",
    filtering: true
  },
  {
    title: "Last Logged In",
    field: "dateLastLoggedIn",
    filtering: false
  },
  {
    title: "Date Added",
    field: "dateAdded",
    filtering: false
  }
];

export class ManageUsersTable extends Component {
  render() {
    const { usersList } = this.props;

    const data = usersList.map(user => ({
      username: user.username,
      role: user.role,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      contact: user.contact,
      isActive: user.isActive ? "Yes" : "No",
      dateLastLoggedIn: moment(user.dateAdded).format("MMM DD, YYYY"),
      dateAdded: moment(user.dateAdded).format("MMM DD, YYYY")
    }));

    const options = {
      columnsButton: true,
      exportButton: true,
      pageSize: 10,
      pageSizeOptions: [10, 20, 50]
    };

    return (
      // <Paper>
      //   <MuiDataTable
      //     title={`Users (${data.length})`}
      //     columns={columns}
      //     data={data}
      //     options={options}
      //   />
      // </Paper>

      <MaterialTable
        title={`Users (${data.length})`}
        columns={columns}
        data={data}
        options={options}
      />
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
