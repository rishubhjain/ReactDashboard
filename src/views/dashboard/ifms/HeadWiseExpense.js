import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider } from '@mui/material';
import { CCardHeader } from '@coreui/react';

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CRow,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  
  } from '@coreui/react'

const columns = [
    { id: 'plan', label: 'Plan', minWidth: 50 },
  { id: 'name', label: 'NP', minWidth: 50 },
  { id: 'code', label: 'CSS', minWidth: 50 },
  { id: 'total', label: 'Total', minWidth: 50 },
  {
    id: 'eplan',
    label: 'Plan',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ename',
    label: 'NP',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ecode',
    label: 'CSS',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'etotal',
    label: 'Total',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(head,plan, name, code, total, eplan, ename, ecode,etotal) {
 let density = 1
  return { head, plan, name, code, total, eplan, ename, ecode,etotal };
}
const drows = [
    createData('083: Road and Building','22.87','-', '-', '22.87', '-','12.46','-','12.46'),
    createData('084: Works','899.01','-', '-', '899.59', '-','449','-','449'),
    createData('086: Roads and Bridges','7773.01','-', '365', '8138', '-','5329','446','5575'),
  //   createData('United States', 'US', 327167434, 9833520),
  //   createData('Canada', 'CA', 37602103, 9984670),
  //   createData('Australia', 'AU', 25475400, 7692024),
  //   createData('Germany', 'DE', 83019200, 357578),
  //   createData('Ireland', 'IE', 4857000, 70273),
  //   createData('Mexico', 'MX', 126577691, 1972550),
  //   createData('Japan', 'JP', 126317000, 377973),
  //   createData('France', 'FR', 67022000, 640679),
  //   createData('United Kingdom', 'GB', 67545757, 242495),
  //   createData('Russia', 'RU', 146793744, 17098246),
  //   createData('Nigeria', 'NG', 200962417, 923768),
  //   createData('Brazil', 'BR', 210147125, 8515767),
  ];

const rows = [
  createData('3054: Road and Bridges','333.01','-', '185', '3718', '-','17090','117','1827'),
  createData('5054: Capital Outlay','4204.01','-', '180', '4420', '-','3619','328','3948'),
  createData('2059: Building','333.01','-', '185', '3718', '-','17090','117','1827'),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <CRow>
          <CCol>
              <CCard>
                  <CCardHeader>
                        Major Head Wise Expense
                        <CDropdown
            style={{float:'right',marginLeft:'2%'}}> 
          <CDropdownToggle  color="light">Demand 086: Roads and Bridges</CDropdownToggle>
          <CDropdownMenu  >
            <CDropdownItem >086: Roads and Bridges</CDropdownItem>
            <CDropdownItem  href=''>083: Roads and Building Department</CDropdownItem>
            

          </CDropdownMenu>
        </CDropdown>
                  </CCardHeader>
                  
           
                  <CCardBody>
                  <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
              
            
            <TableRow>
            <TableCell align="center" colSpan={2} >
                
              </TableCell>
              <TableCell align="center" colSpan={4} style={{fontWeight:'bold'}}>
                Budget
              </TableCell>
              
              <TableCell align="center" colSpan={5} style={{fontWeight:'bold'}}>
                Expenditure
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="center" colSpan={3} style={{fontWeight:'bold'}} >Major Head</TableCell>
            
              {columns.map((column) => (
                
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, fontWeight:'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                       <TableCell key={'head'} align="center" colSpan={3}>
                           {row.head}
                      </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                       
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
                  </CCardBody>
              </CCard>
        </CCol>

        <CRow>
          <CCol>
              <CCard>
                  <CCardHeader>
                        Demand No Wise Expense
                   </CCardHeader>
                  
           
                  <CCardBody>
                  <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
              
            
            <TableRow>
            <TableCell align="center" colSpan={2}>
                
              </TableCell>
              <TableCell align="center" colSpan={4} style={{fontWeight:'bold'}}>
                Budget
              </TableCell>
              
              <TableCell align="center" colSpan={5} style={{fontWeight:'bold'}}>
                Expenditure
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="center" colSpan={3} style={{fontWeight:'bold'}}>Demand No</TableCell>
            
              {columns.map((column) => (
                
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, fontWeight:'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {drows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                       <TableCell key={'head'} align="center" colSpan={3}>
                           {row.head}
                      </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                       
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
                  </CCardBody>
              </CCard>
        </CCol>

      </CRow>

      </CRow>
      
    
  );
}
