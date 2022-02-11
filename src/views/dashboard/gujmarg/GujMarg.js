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


const GujMarg = () => {

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

<CRow style={{ marginTop: "2%" }}>
            <CCol style={{ marginTop: "2%" }} sm={4}>
              <CWidgetStatsA
                className="mb-4"
                color="info"
                value={
                  <>
                    6543{' '}
                    {/* <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span> */}
                  </>
                }
                title="Total Number of Complaints"
                action={
                  <CDropdown alignment="end">
                    <CDropdownToggle color="transparent" caret={false} className="p-0">
                      <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Checkout All Complaints</CDropdownItem>

                    </CDropdownMenu>
                  </CDropdown>
                }
                chart={
                  <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointBackgroundColor: '#39f',
                          data: [1, 18, 9, 17, 34, 22, 11],
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawBorder: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          min: -9,
                          max: 39,
                          display: false,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 1,
                        },
                        point: {
                          radius: 4,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>

            <CCol style={{ marginTop: "2%" }} xs={4} >
              <CWidgetStatsB
                style={{ height: "160px", background: "rgba(140, 234, 15, 0.2)" }}
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="Target achieved last month"
                value="89.9%"
              />
            </CCol>
            <CCol style={{ marginTop: "2%" }} sm={4}>
              <CWidgetStatsA
                className="mb-4"
                color="danger"
                value={
                  <>
                    234{' '}
                    {/* <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span> */}
                  </>
                }
                title="Total Number of Emergency Complaints"
                action={
                  <CDropdown alignment="end">
                    <CDropdownToggle color="transparent" caret={false} className="p-0">
                      <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem>Checkout All Complaints</CDropdownItem>

                    </CDropdownMenu>
                  </CDropdown>
                }
                chart={
                  <CChartLine
                    className="mt-3 mx-3"
                    style={{ height: '70px' }}
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointBackgroundColor: '#39f',
                          data: [1, 18, 9, 17, 34, 22, 11],
                        },
                      ],
                    }}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      maintainAspectRatio: false,
                      scales: {
                        x: {
                          grid: {
                            display: false,
                            drawBorder: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                        y: {
                          min: -9,
                          max: 39,
                          display: false,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            display: false,
                          },
                        },
                      },
                      elements: {
                        line: {
                          borderWidth: 1,
                        },
                        point: {
                          radius: 4,
                          hitRadius: 10,
                          hoverRadius: 4,
                        },
                      },
                    }}
                  />
                }
              />
            </CCol>
          </CRow>

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
            <CCol xs={4}>
              <CCard className="mb-6">
                <CCardHeader>
                  Complaints
                </CCardHeader>
                <CCardBody>
                  <CChartPie                  
                  data={{
                labels: ['Rejected', 'Pending', 'Emergency', "Approved", "Completed"],
                datasets: [
                  {
                    data: [newRandom(), newRandom(), newRandom(),newRandom(),newRandom()],
                    backgroundColor: ['rgba(0, 0, 255, 0.1)', 'rgba(255, 0, 0, 0.1)', 'rgba(128, 203, 196, 0.4)','rgba(0, 184, 255, 0.13)','rgba(0, 255, 0, 0.1)'],
                    hoverBackgroundColor: ['rgba(0, 0, 255, 0.1)', 'rgba(255, 0, 0, 0.1)', 'rgba(128, 203, 196, 0.4)','rgba(0, 184, 255, 0.13)','rgba(0, 255, 0, 0.1)'],
                    borderWidth:1,
                    borderColor:['rgba(0, 0, 255)', 'rgba(255, 0, 0)', 'rgba(128, 203, 196)','rgba(0, 184, 255)','rgba(0, 255, 0)'],
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
          <Link to="/dashboard/gujmarg">
            <a>Complaint Status</a>
            </Link>
          </CCardHeader>
          <CCardBody>
            <CChartLine
            
              data={{
                labels: ['Total','Pending ', 'Completed', 'Emergency', 'Approved', 'Rejected'],
                datasets: [
                  {
                    label: 'National Highway',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), ],
                  },
                  {
                    label: 'State',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                  {
                    label: 'Capital',
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                    borderColor: 'rgba(220, 159, 49, 0.2)',
                    pointBackgroundColor: 'rgba(220, 159, 49, 0.2)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                  {
                    label: 'Panchayat',
                    backgroundColor: 'rgba(220, 100, 50, 0.2)',
                    borderColor: 'rgba(220, 100, 50, 1)',
                    pointBackgroundColor: 'rgba(220, 100, 50, 1)',
                    pointBorderColor: '#fff',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                  },
                ],
              }}
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

export default GujMarg
