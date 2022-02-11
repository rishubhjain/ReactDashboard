import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Budget Estimate', "12,844", "33,814", "613", "47,272"),
  createData('Grant Released'," 14,005", "23,166"," 960", "38,132"),
  createData('Total Expenditure', "25.33", "1,471", "0.47", "1,497"),
  createData('Un-Utilized Grant', "13,980", "21,467", "960", "36,635"),
  createData('%Un-Utilized Grant', "99.82%", "93.65%", "99.96%", "96%"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Plan(in Cr)</TableCell>
            <TableCell align="right">Non Plan(in Cr)</TableCell>
            <TableCell align="right">CSS(in CR)</TableCell>
            <TableCell align="right">Total (in Cr)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}