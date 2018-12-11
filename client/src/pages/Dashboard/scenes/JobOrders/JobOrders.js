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
    return (
      <Fragment>
        <JobOrdersTable />
        
        <CreateDialog />
      </Fragment>
    );
  }
}

export default JobOrders;
