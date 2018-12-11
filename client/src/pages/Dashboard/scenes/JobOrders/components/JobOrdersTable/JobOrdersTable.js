import React, { Component } from "react";
import { Paper, Button } from "@material-ui/core";
import MuiDataTable from "mui-datatables";

const columns = [
  "#",
  "Associate",
  "Shipper",
  "Commodity",
  "MoT",
  "BL/AWB#",
  "Origin",
  "Destination",
  "Pickup",
  "ETA",
  "ETD"
];

export class JobOrdersTable extends Component {
  render() {
    return (
      <Paper>
        <MuiDataTable columns={columns} title="Job Orders" />
      </Paper>
    );
  }
}

export default JobOrdersTable;
