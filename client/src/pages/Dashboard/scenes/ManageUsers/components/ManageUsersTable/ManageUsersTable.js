import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { selectUser } from "services/session/actions/adminActions";

import { CircularProgress } from "@material-ui/core";
import MaterialTable, { MTableBody } from "material-table";

const columns = [
  {
    title: "Username",
    field: "username"
  },
  {
    title: "Role",
    field: "role"
  },
  {
    title: "First Name",
    field: "firstName"
  },
  {
    title: "Middle Name",
    field: "middleName"
  },
  {
    title: "Last Name",
    field: "lastName"
  },
  {
    title: "Email",
    field: "email"
  },
  {
    title: "Contact",
    field: "contact"
  },
  {
    title: "Active",
    field: "isActive"
  },
  {
    title: "Last Logged In",
    field: "dateLastLoggedIn"
  },
  {
    title: "Date Added",
    field: "dateAdded"
  }
];

export class ManageUsersTable extends Component {
  render() {
    // >>> Redux
    const { users, selectUser } = this.props;

    const data = users.list.map(user => ({
      username: user.username,
      role: user.role,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      contact: user.contact,
      isActive: user.isActive ? "Yes" : "No",
      dateLastLoggedIn: moment(user.dateAdded).format("MMM DD, YYYY"),
      dateAdded: moment(user.dateAdded).format("MMM DD, YYYY"),
      id: user._id
    }));

    const options = {
      columnsButton: true,
      exportButton: true,
      pageSize: 10,
      pageSizeOptions: [10, 20, 50],
      paging: true
    };

    const actions = [
      {
        icon: "edit",
        tooltip: "Edit",
        onClick: (event, rowData) => {
          selectUser(rowData.id);
        }
      }
    ];

    // const components = {
    //   Body: props => {
    //     return users.isLoading ? "Loading Users" : <MTableBody {...props} />;
    //   }
    // };

    return (
      <MaterialTable
        title={`Users (${data.length})`}
        columns={columns}
        data={data}
        options={options}
        actions={actions}
        // components={components}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.admin.users
});

const mapDispatchToProps = {
  selectUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsersTable);
