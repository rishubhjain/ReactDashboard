import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
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

const IWDMS = () => {

  const [visible, setVisible] = useState(false)

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

  const columns = generateColumns(10)
  const data = generateData(columns, 200)

  const dataLabels = ['<5 Cr', '>=5 Cr', '>=10 Cr', '>=15 Cr', '>=20 Cr', '>=25 Cr', '>=30 Cr']



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
const treeData = unflatten(data);

  return (
    <>

    <CRow>
    <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a></a>
            <CDropdown
            style={{float:'right',marginLeft:'2%'}}> 
          <CDropdownToggle color="light">Monthly</CDropdownToggle>
          <CDropdownMenu>
          <CDropdownItem href="#">Monthly</CDropdownItem>
            <CDropdownItem href="#">Weekly</CDropdownItem>
            <CDropdownItem href="#">Daily</CDropdownItem>
            <CDropdownItem href="#">Custom Date</CDropdownItem>
            
          </CDropdownMenu>
        </CDropdown>
            <CDropdown
            style={{float:'right',marginLeft:'2%'}}> 
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
	  <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pending Work Items</strong>
          </CCardHeader>
          <CCardBody>
           
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  e-Tapal
                  <p fontSize="medium" style={{color:'black'}} >100</p>
                </CButton>
                <CButton color="danger" size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="1" >
                  Files
                  <p fontSize="medium" style={{color:'black'}} >60</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="2" >
                  MP-MLA
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="3" >
                  New Tapals
                  <p fontSize="medium" style={{color:'black'}} >5</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="4" >
                  RTI
                  <p fontSize="medium" style={{color:'black'}} >2</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="5" >
                  PG Portal
				  <p fontSize="medium" style={{color:'black'}} >40</p>
                </CButton>
                

          </CCardBody>
        </CCard>
      </CCol>
	  </CRow>
        
    <CRow>
	   <CCol xs={8}>
        <CCard className="mb-6">
          <CCardHeader>Pending Tapal
          </CCardHeader>
          <CCardBody>
            <CChartBar
            options={{
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked:true,
                }
              }
            }}
            data={{
                labels: ['0-7','7-15','15-30','30-90','90-180'],
                datasets: [
                  {
                    label: 'e-Tapal',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(),newRandom()],
                  },
                  {
                    label: 'Files',
                    stack: 'Stack 1',
                    data: [newRandom() , newRandom(), newRandom(), newRandom(), newRandom()],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
          
          
    
	 
    
    </CCard>
    </CRow>
    </>
  )
}

export default IWDMS
