import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import { getAllUsers } from "../../../../services/session/actions/adminActions";
import { getAllUsers } from "services/session/actions/adminActions";

import ManageUsersTable from "./components/ManageUsersTable/ManageUsersTable";
import CreateUserDialog from "./components/CreateUserDialog/CreateUserDialog";

export class ManageUsers extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {
      isCreateUserDialogOpen,
      createUserDialogToggle,
      usersIsLoading
    } = this.props;

    console.log(usersIsLoading);

    return (
      <Fragment>
        {usersIsLoading ? <span>Loading</span> : <ManageUsersTable />}

        <CreateUserDialog
          isCreateUserDialogOpen={isCreateUserDialogOpen}
          createUserDialogToggle={createUserDialogToggle}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  usersIsLoading: state.admin.users.isLoading
});

const mapDispatchToProps = {
  getAllUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUsers);
