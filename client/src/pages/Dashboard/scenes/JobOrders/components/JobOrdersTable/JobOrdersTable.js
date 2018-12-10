import React, { Component } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

export class JobOrdersTable extends Component {
  render() {
    return (
      <Paper>
        <Table style={{overflowX: "auto"}}>
          <TableHead>
            <TableRow>
              {[
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
              ].map(item => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {[
                "D-1",
                "Leandro Esparrago",
                "Nescafe",
                "Coffee products",
                "Truck",
                "N/A",
                "SM Marikina",
                "Nestle",
                "05/10/2018",
                "05/11/2018",
                "05/12/2018"
              ].map(item => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default JobOrdersTable;
