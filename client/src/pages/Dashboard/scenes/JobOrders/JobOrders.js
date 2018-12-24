import React, { Component, Fragment } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import JobOrdersTable from "./components/JobOrdersTable/JobOrdersTable";
import CreateDialog from "./components/CreateDialog/CreateDialog";

export class JobOrders extends Component {
  render() {
    const { isCreateDialogOpen, createDialogToggle } = this.props;

    return (
      <Fragment>
        {/* <JobOrdersTable /> */}

        <CreateDialog
          isCreateDialogOpen={isCreateDialogOpen}
          createDialogToggle={createDialogToggle}
        />
      </Fragment>
    );
  }
}

export default JobOrders;
