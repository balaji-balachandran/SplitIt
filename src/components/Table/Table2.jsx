import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { display } from "@mui/system";

function createData(name, product, price, status) {
  return { name, product, price, status };
}

const rows = [
  // createData("Balaji", "Cereal", 8, "Paid"),
  createData("Balaji", "Fish & Chips Bowl", 9.35, "Pending"),
  // createData("Yatin", "Chips", 5, "Paid"),
  // createData("Balaji", "Milk", 8, "Paid"),
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

function showPayment(){
  let paytable = document.getElementById("PayTable")
  if(paytable.style.opacity == 0){
    paytable.style.opacity = 1;
    paytable.style.display = 'inline';
  }
  else{
    paytable.style.opacity = 0;
    paytable.style.display = 'none';
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3 className="subTitle">Breakdown</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Contact</TableCell>
                <TableCell align="left">Product</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">${row.price}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><button type='button' onClick={showPayment}>Pay</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}