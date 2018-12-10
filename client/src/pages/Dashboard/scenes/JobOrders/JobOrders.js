import React, { Component, Fragment } from "react";
import JobOrdersTable from "./components/JobOrdersTable/JobOrdersTable";

export class JobOrders extends Component {
  render() {
    return (
      <Fragment>
          <JobOrdersTable />
      </Fragment>
    );
  }
}

export default JobOrders;
