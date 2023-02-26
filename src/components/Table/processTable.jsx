import * as React from "react";
import { makeStyles } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import SearchBar from "../SearchBar/SearchBar";
import BookData from "../SearchBar/Data.json";

function createData(name, product, price, status) {
  return { name, product, price, status };
}

const rows = [
  createData("Yatin", "Fish & Chips Bowl", 9.35, "Paid"),
  createData("Anshul", "Fish & Chips Bowl", 9.35, "Paid"),
  createData("Yatin", "Drink", 2.07, "Pending"),
  createData("Balaji", "Drink", 2.07, "Pending"),
  createData("Yatin", "Fish Spycy Soup", 4.14, "Pending"),
  createData("Anshul", "Fish Spycy Soup", 4.14, "Pending"),
];

const makeStyle=(status)=>{
  if(status === 'Paid')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3 className="subTitle">Breakdown</h3>
        <TableContainer
          sx={{
            height: 300,   
            width: 700
          }}
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029"}}
        >
          <Table sx={{height: "max-content"}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {/* {row.name} */}
                    <SearchBar placeholder="Enter Name" data={BookData} />
                  </TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">${row.price}</TableCell>
                  <TableCell align="left">
                    <span className="status" id="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}