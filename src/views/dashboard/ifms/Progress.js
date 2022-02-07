import React, { lazy } from 'react'


import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import BaseTable, { Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow, } from 'react-base-table'
import 'react-base-table/styles.css'

import  { useState } from 'react'
import {
 
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'


import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
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
// import { cifAU } from '@coreui/icons'

// import ReactDOM from "react-dom";
import { CChartBar, CChartLine,
  CChartPie, } from '@coreui/react-chartjs'
// import {DocsExample } from 'src/components'
// import OrgChart from '@unicef/react-org-chart'

// import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilFilter,
} from '@coreui/icons'
// import {
	
//   cibCcAmex,
//   cibCcApplePay,
//   cibCcMastercard,
//   cibCcPaypal,
//   cibCcStripe,
//   cibCcVisa,
//   cibGoogle,
//   cibFacebook,
//   cibLinkedin,
//   cifBr,
//   cifEs,
//   cifFr,
//   cifIn,
//   cifPl,
//   cifUs,
//   cibTwitter,
//   cilCloudDownload,
//   cilPeople,
//   cilUser,
//   cilUserFemale,
// } from '@coreui/icons'

// const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

function createData(name, calories, fat, carbs, protein, price, place) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    place,
    history: [
      {
        type: 'Work 1',
        customerId: '20',
        amount: "11",
        total:"",
      },
      {
        type: 'Work 2',
        customerId: '21',
        amount: "14",
        total:"",
      },
      {
        type: 'Work 3',
        customerId: '41',
        amount: "44",
        total:"",
      },
      {
        type: 'Work 4',
        customerId: '94',
        amount: "23",
        total:"",
      },
      
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.place}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell>Work Name</TableCell>
                    
                    <TableCell>Physical Progress (%)</TableCell>
                    <TableCell>Financial Progress (%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.type}
                      </TableCell>
                      
                      <TableCell >{historyRow.amount}</TableCell>
                      <TableCell >
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        total: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Division1', "Total", 6.0, 24, 4.0, 3, "Sub Division 1"),
  createData('Division2', "Total", 9.0, 37, 4.3, 4, "EE(Ahmedabad)"),
  createData('Division3', "Total", 16.0, 24, 6.0, 3, "EE(Ahmedabad)"),
  createData('Division4', "Total", 3.7, 67, 4.3, 2, "EE(Ahmedabad)"),
  createData('Division5', "Total", 16.0, 49, 3.9, 1, "EE(Ahmedabad)"),
];



const Progress = () => {


  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }


  const generateColumns = (count = 10, prefix = 'column-', props) =>
  new Array(count).fill(0).map((column, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (columns, count = 200, prefix = 'row-') =>
  new Array(count).fill(0).map((row, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

  //const columns = ["Office Name", "Work Type", "Total Part Works", "Land Not Cleared", "AA Not Entered"]
  const columns = generateColumns(10)
  console.log(columns)
  const data = generateData(columns, 200)



const frozenData = generateData(columns, 3, 'frozen-row-')

const fixedColumns = columns.map((column, columnIndex) => {
  let frozen
  if (columnIndex < 2) frozen = Column.FrozenDirection.LEFT
  if (columnIndex > 8) frozen = Column.FrozenDirection.RIGHT
  return { ...column, frozen }
})

const expandColumnKey = 'column-0'

// add some sub items
for (let i = 0; i < 3; i++) {
  data.push({
    ...data[0],
    id: `${data[0].id}-sub-${i}`,
    parentId: data[0].id,
    [expandColumnKey]: `Sub ${i}`,
  })
  data.push({
    ...data[2],
    id: `${data[2].id}-sub-${i}`,
    parentId: data[2].id,
    [expandColumnKey]: `Sub ${i}`,
  })
  data.push({
    ...data[2],
    id: `${data[2].id}-sub-sub-${i}`,
    parentId: `${data[2].id}-sub-${i}`,
    [expandColumnKey]: `Sub-Sub ${i}`,
  })
}
const treeData = unflatten(data)


  return (
    <>
    {/* <CRow style={{display:'none'}}>
      <CCol>
      <BaseTable
    columns={fixedColumns}
    data={treeData}
    frozenData={frozenData}
    width={1200}
    height={400}
    expandColumnKey={expandColumnKey}
  />
      </CCol>
    </CRow> */}
    <CRow>

      <CCol>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Office Name</TableCell>
            <TableCell align="right">Work Type</TableCell>
            <TableCell align="right">Total Part Works (nos.)</TableCell>
            <TableCell align="right">Land not clear (nos.)</TableCell>
            <TableCell align="right">AA Not Entered (nos.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </CCol>
    </CRow>
    </>
  )
}

export default Progress
