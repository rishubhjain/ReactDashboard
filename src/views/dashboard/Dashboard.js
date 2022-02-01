import React, { lazy } from 'react'

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




const Dashboard = () => {

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
    {/* <CRow>
      <CCol>
      <BaseTable
    columns={fixedColumns}
    data={treeData}
    frozenData={frozenData}
    width={600}
    height={400}
    expandColumnKey={expandColumnKey}
  />
      </CCol>
    </CRow> */}
    <CRow>
      <CCol>
     <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Hot Mix Plant Status</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CTable>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name of Agency</CTableHeaderCell>
            <CTableHeaderCell scope="col">District</CTableHeaderCell>
            <CTableHeaderCell scope="col">NetMix</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Ronak Construction</CTableDataCell>
            <CTableDataCell>Bharuch</CTableDataCell>
            <CTableDataCell>320</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Dev Construction</CTableDataCell>
            <CTableDataCell>Navsari</CTableDataCell>
            <CTableDataCell>985</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>L.G.Chaudhary</CTableDataCell>
            <CTableDataCell>Ahmedabad</CTableDataCell>
            <CTableDataCell>426.80</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        
      </CModalFooter>
    </CModal>
      </CCol>
    </CRow>
    <CRow>
    <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a>WMS</a>
           
            <CDropdown
            style={{float:'right',marginLeft:'5%'}}> 
          <CDropdownToggle color="light">Location</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">All</CDropdownItem>
            <CDropdownItem href="#">SH</CDropdownItem>
            <CDropdownItem href="#">NH</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        
          </CCardHeader>
          
    <CRow>
      
    <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader>Work</CCardHeader>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['Completed', 'Dropped', 'Pending'],
                datasets: [
                  {
                    data: [newRandom(), newRandom(), newRandom()],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={8}>
        <CCard className="mb-4">
          <CCardHeader className="me-md-3">
            <a>Work Type Status</a>
          
          </CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Site Information ', 'AA', 'TS', 'DTP', 'Tender', 'Tender Approval', 'Work Order'],
                datasets: [
                  {
                    label: 'Building',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                  {
                    label: 'Road',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                  {
                    label: 'Bridge',
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                    borderColor: 'rgba(220, 159, 49, 0.2)',
                    pointBackgroundColor: 'rgba(220, 159, 49, 0.2)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                  {
                    label: 'Others',
                    backgroundColor: 'rgba(220, 100, 50, 0.2)',
                    borderColor: 'rgba(220, 100, 50, 1)',
                    pointBackgroundColor: 'rgba(220, 100, 50, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
       </CCol>
	   
	   <CCol xs={8}>
        <CCard className="mb-6">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Work Order Wise Expense',
                    backgroundColor: '#f87979',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
          
          
    <CRow>
	   
	  </CRow>
    <CRow className="mb-2">
    <CCard className="mb-2">
          <CCardHeader className="me-md-3">
            <a>Scada</a>
            </CCardHeader>
            </CCard>
            <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader>Hot Mix Plant Status</CCardHeader>
          <CCardBody>
            <CChartPie
              getElementAtEvent={(elements, event) => {
                console.log("Here")
                if (event.type === "click" && elements.length) {
                  console.log(elements[0]);
                    setVisible(!visible)
                  
                }
              }}
              data={{
                labels: ['Offline', 'Online'],
                datasets: [
                  {
                    data: [newRandom(), newRandom()],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)' ],
                    borderColor:['rgb(255, 99, 132)','rgb(54, 162, 235)'],
                    borderWidth: 1,
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={8}>
        <CCard className="mb-3">
          <CCardHeader>Production of Online Plants</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Today'],
                datasets: [
                  {
                    label: 'Production (in metric ton)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2) ',
                    borderColor:'rgb(54, 162, 235)',
                    borderWidth: 1,
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
	  <CRow>
	  <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Work Status</strong>
          </CCardHeader>
          <CCardBody>
           
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Total
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger" size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="1" >
                  In Process
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="2" >
                  Delay 50%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="3" >
                  Delay 100%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="4" >
                  Delay 200%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="5" >
                  Completed
				  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                

          </CCardBody>
        </CCard>
      </CCol>
	  </CRow>
    
    </CCard>
    </CRow>
    </>
  )
}

export default Dashboard
