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
  CCardImage,
  CCardLink,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

import {PopupModal} from "./Modal"

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
  const newData = newRandom()
  const newData1 = newRandom()
  const newData2 = newRandom()
  const newData3 = newRandom()
  const newData4 = newRandom()

  const [hotMixChartData] = useState([newRandom(), newRandom()]);

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

  const [dataLabels, setdataLabels] = useState(['<5 Cr', '>=5 Cr', '>=10 Cr', '>=15 Cr', '>=20 Cr', '>=25 Cr', '>=30 Cr'])

const changeDataLabel = (prop) => {
  if (prop == "Date") {
    setdataLabels(['2014-15','2015-16','2016-17','2017-18', '2018-19', '2019-20', '2020-21'])
  } else {
    setdataLabels(['<5 Cr', '>=5 Cr', '>=10 Cr', '>=15 Cr', '>=20 Cr', '>=25 Cr', '>=30 Cr'])
  }

}

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
    {/* <CRow>
        <CCol>
        <CCard style={{ width: '18rem' }}>
  <CCardImage orientation="top" src="../images/react.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
    </CCardText>
  </CCardBody>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardBody>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
        </CCol>
    </CRow> */}
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
        <PopupModal visible={visible} setVisible={setVisible} />
      </CCol>
    </CRow>
    <CRow>
    <CCard className="mb-4" style={{marginRight:'0'}} >

          <CCardHeader className="me-md-3" style={{marginRight:'0'}}>
            <a>Works Monitoring System</a>
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
            style={{float:'right'}}>
          <CDropdownToggle color="light">All Wings</CDropdownToggle>
          <CDropdownMenu onClick={() => {return}} >
            <CDropdownItem >All Wings</CDropdownItem>
            <CDropdownItem >State</CDropdownItem>
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

    <CCol xs={4}>
        <CCard className="mb-3">
        <Link to="/dashboard/workDetails">
          <CCardHeader>Work</CCardHeader>
          </Link>
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
        <CCard className="mb-3">
          <CCardHeader className="me-md-3">
          <Link to="/dashboard/work">
            <a>Work Status</a>
            </Link>
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
          <CCardHeader>Work Order vs Expense
          <CDropdown

            style={{float:'right',marginLeft:'2%'}}>
          <CDropdownToggle color="light">Cost Range Wise</CDropdownToggle>
          <CDropdownMenu>
          <CDropdownItem onClick={(event) => {changeDataLabel("Date");return true;}}  key="0">Date Wise</CDropdownItem>
          <CDropdownItem onClick={(event) => {changeDataLabel("Cost");return true;}} key="1" >Cost Range Wise</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>


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
                  position: 'left',
                },
                z:{
                  stacked:true,
                  position: 'right',
                  backgroundColor:'rgba(220, 159, 49, 0.2)',
                }
              }
            }}
              data={{
                labels: dataLabels,
                datasets: [
                  {
                    yAxisID: 'y',
                    label: 'Number of Work Orders',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: [newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2],
                  },
                  {
                    yAxisID: 'z',
                    label: 'Total Expense (Rs)',
                    stack: 'Stack 1',
                    data: [newRandom() + 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000, newRandom()+ 10000],
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
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
                    data: hotMixChartData,
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
            <Link to={'/dashboard/wms/workorderstatus'}>

            <strong>Work Order Status</strong>
            </Link>
          </CCardHeader>
          <CCardBody>

                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Total
                  <p fontSize="medium" style={{color:'black'}} >100</p>
                </CButton>
                <CButton color="danger" size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="1" >
                  In Process
                  <p fontSize="medium" style={{color:'black'}} >60</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="2" >
                  Delay 50%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="3" >
                  Delay 100%
                  <p fontSize="medium" style={{color:'black'}} >5</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="4" >
                  Delay 200%
                  <p fontSize="medium" style={{color:'black'}} >2</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="5" >
                  Completed
				  <p fontSize="medium" style={{color:'black'}} >40</p>
                </CButton>


          </CCardBody>
        </CCard>
      </CCol>
	  </CRow>
    <CRow>
    <CCol xs={6}>
        <CCard className="mb-6">
        <Link to="/dashboard/ifms/progress">
          <CCardHeader> Division Wise Work Count
          </CCardHeader>
          </Link>
          <CCardBody>
            <CChartBar
            options={{
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked:true,
                },


              }
            }}
              data={{
                labels: ['Division 1','Division 2','Division 3','Division 4','Division 5'],
                datasets: [
                  {
                    label: 'Works',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: [newData, newData1, newData2, newData3,newData4],
                  },

                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-6">
        <Link to="/dashboard/ifms/progress">
          <CCardHeader> Physical Vs Financial Progress %
          </CCardHeader>
          </Link>
          <CCardBody>
            <CChartBar
            options={{
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked:true,
                  min:0,
                  max:100,
                },


              }
            }}
              data={{
                labels: ['Division 1','Division 2','Division 3','Division 4','Division 5'],
                datasets: [

                  {
                    label: 'Physical Progress',
                    stack: 'Stack 1',
                    data: [newData/2, newData1/2, newData2/2, newData3/2,newData4/2],
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                  },
                  {
                    label: 'Financial Progress',
                    stack: 'Stack 2',
                    data: [newData/3, newData1/3, newData2/3, newData3/3,newData4/3],
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

export default Dashboard
