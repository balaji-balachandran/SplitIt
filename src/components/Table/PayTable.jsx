import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import "./Table.css";

// function createData(cardNum, expM, expY, cvv) {
//   return { cardNum, expM, expY, cvv };
// }

// const rows = [
//   createData("4111 1111 1111 1111", 12, 2027, 123),
// ];

export default function BasicTable() {
  return (
      <div className="Table" id="PayTable">
      <h3 className="subTitle">Payment Information</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{width: '40%'}}>Card Number</TableCell>
                <TableCell align="left" style={{width: '10%'}}>Exp. Month</TableCell>
                <TableCell align="left">Exp. Year</TableCell>
                <TableCell align="left">CVV</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.cardNum}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cardNum}
                  </TableCell>
                  <TableCell align="left">{row.expM}</TableCell>
                  <TableCell align="left">{row.expY}</TableCell>
                  <TableCell align="left">{row.cvv}</TableCell>
                <TableCell align="left" className="Details"><button type='button'>Enter</button></TableCell>
                </TableRow>
              ))}
            </TableBody> */}
            <TableBody style={{ color: "white" }}>
                <TableRow
                //   key={row.cardNum}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <input type="text" id="card" required></input>
                  </TableCell>
                  <TableCell align="left"><input type="text" id="month" required></input></TableCell>
                  <TableCell align="left"><input type="text" id="year" required></input></TableCell>
                  <TableCell align="left"><input type="text" id="cvv" required></input></TableCell>
                <TableCell align="left" className="Details"><button type='button'>Enter</button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}