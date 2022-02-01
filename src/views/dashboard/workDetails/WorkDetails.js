import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('SE APC', "EE(P) Ahmedabad", "Road", "Ahmedabad Construction of new block and extension of existing block ", "Not Started"),
  createData('SE APC', "EE(P) Ahmedabad", "Building", "Navsari Acquisition of land and construction of compound wall building for newly proposed government polytechnic", "Done"),
  createData('SE APC', "EE(P) Anand", "Bridge", "Ahmedabad Construction of new block and extension of existing block for auto department at govt", "Not Started"),
  createData('SE APC', "EE(P) Surat", "Road", "Surat Construction Work Of Administrative", "Done"),
  createData('SE APC', "EE(P) Ahmedabad", "Bridge", " Ahmedabad. Construction of new auditorium for 1000 seats capicity with mini theatre at L.D. engineering college, Ahmadabad.", "Not Started"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SE Office</StyledTableCell>
            <StyledTableCell >EE Office</StyledTableCell>
            <StyledTableCell >Work Type</StyledTableCell>
            <StyledTableCell >Work Name</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
              <StyledTableCell >{row.carbs}</StyledTableCell>
              <StyledTableCell >{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}