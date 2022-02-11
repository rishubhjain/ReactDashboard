import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import BaseTable, {
  Column,
  SortOrder,
  AutoResizer,
  normalizeColumns,
  callOrReturn,
  unflatten,
  TableHeader as BaseTableHeader,
  TableRow as BaseTableRow,
} from 'react-base-table'
import 'react-base-table/styles.css'

import { useState } from 'react'
import {
  cilArrowTop,
  cilOptions,
} from '@coreui/icons'
import {
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
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
import {
  CChartBar, CChartLine,
  CChartPie,
} from '@coreui/react-chartjs'

// import {DocsExample } from 'src/components'
// import OrgChart from '@unicef/react-org-chart'

// import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilFilter,
} from '@coreui/icons'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein, total) {
  return { name, calories, fat, carbs, protein, total };
}

const rows = [
  createData('SH', "83", "148", "214","492", "937"),
  createData('MDR',"2", "17"," 106", "868","994"),
  createData('ODR', "0", "2", "24", "445","471"),
  createData('VR', "0", "3", "11","198", "212"),
  createData('Total Length (km)', "86", "169", "355","2005", "2615"),
];  


const GujRams = () => {

  const [visible, setVisible] = useState(false)
  const data = ["1200","4000","2400","6000"]
  const sdata = ["2300","5200","3300","600"]
  const edata = ["1300","6200","3500","700"]

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }
  return (
    <>

      <CRow>
        <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a></a>
            <CDropdown
              style={{ float: 'right', marginLeft: '2%' }}>
              <CDropdownToggle color="light">Monthly</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Monthly</CDropdownItem>
                <CDropdownItem href="#">Weekly</CDropdownItem>
                <CDropdownItem href="#">Daily</CDropdownItem>
                <CDropdownItem href="#">Custom Date</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>
            <CDropdown
              style={{ float: 'right', marginLeft: '2%' }}>
              <CDropdownToggle color="light">All Wings</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">All Wings</CDropdownItem>
                <CDropdownItem href="#">State</CDropdownItem>
                <CDropdownItem href="#">NH</CDropdownItem>
                <CDropdownItem href="#">Panchayat</CDropdownItem>
                <CDropdownItem href="#">CP{'&'}A</CDropdownItem>
                <CDropdownItem href="#">PPU</CDropdownItem>
                <CDropdownItem href="#">WB</CDropdownItem>
                <CDropdownItem href="#">QC</CDropdownItem>
                <CDropdownItem href="#">STC</CDropdownItem>

              </CDropdownMenu>
            </CDropdown>


          </CCardHeader>

          <CRow>
            <CCol xs={6}>
              <CCard className="mb-6">
                <CCardHeader>
                  Survey Details
                </CCardHeader>
                <CCardBody>
                <CChartBar
            
              data={{
                labels: ['SH', 'MDR', 'ODR', "VR"],
                datasets: [
                  {
                    label: 'Network Length',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: data,
                  },
                  {
                    label: 'Surveyed Length',
                    stack: 'Stack 1',
                    data: sdata,
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                  },
                ],
              }}
            />
                  
                  </CCardBody>
              </CCard>
            </CCol>
            <CCol xs={4}>
                <CCard>
                    <CCardHeader>
                        Condition By Length
                    </CCardHeader>
                    <CCardBody>
                    <CChartPie 
                data={{
                    labels: ['Very Good 130 Km','Fair 751.44 Km', 'Good 1,024 Km',  'Poor 395 Km', 'Very poor 601 Km'],
                    datasets: [
                      {
                        data: [newRandom(), newRandom(),newRandom(),newRandom(),newRandom()],
                        backgroundColor: ['#36A2EB','#FF6384','#36A3A2','rgba(54, 162, 235, 0.2)','rgba(26, 193, 31, 0.2)'],
                        hoverBackgroundColor:['#36A2EB','#FF6384','#36A3A2','rgba(54, 162, 235, 0.2)'],
                      },
                    ],
                  }}
                  />
                    </CCardBody>
                </CCard>
                
            </CCol>
          </CRow>
          <CRow>
              <CCol xs={6}>
                  <CCard>
                      <CCardHeader>
                          Network By Roughness
                      </CCardHeader>
                      <CCardBody>
                      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Very Good</TableCell>
            <TableCell align="right">Good</TableCell>
            <TableCell align="right">Fair</TableCell>
            <TableCell align="right">Poor</TableCell>
            <TableCell align="right">Total</TableCell>
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
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                      </CCardBody>
                  </CCard>
              
              </CCol>
          </CRow>
          




        </CCard>
      </CRow>
      <CRow>
          <CCol xs={6}>
          <CCard className="mb-6">
                <CCardHeader>
                  Number of Bridges
                </CCardHeader>
                <CCardBody>
                <CChartBar
            
              data={{
                labels: ['SH', 'MDR', 'ODR', "VR"],
                datasets: [
                  {
                    label: 'Culverts',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: data,
                  },
                  {
                    label: 'Major Bridges',
                    stack: 'Stack 1',
                    data: sdata,
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                  },
                  {
                    label: 'Major Bridges',
                    stack: 'Stack 2',
                    data: edata,
                    backgroundColor: 'rgba(36, 36, 190, 0.2)',
                  },
                ],
              }}
            />
                  
                  </CCardBody>
              </CCard>
          </CCol>
      </CRow>
    </>
  )
}

export default GujRams
