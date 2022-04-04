import React, { lazy } from 'react'
import 'react-base-table/styles.css'

import { Link } from 'react-router-dom'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,  
  CRow,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowTop,
  cilOptions,
} from '@coreui/icons'
import SchemeWiseData from './SchemeWiseData'
import {
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'

import { CChartBar,CChartLine,
  CChartPie, } from '@coreui/react-chartjs'
  import BasicTable from './BasicTable'
import { ticks } from 'd3'


const IFMS = () => {

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }

  const newData = newRandom()
  const newData1 = newRandom()
  const newData2 = newRandom()
  const newData3 = newRandom()
  const newData4 = newRandom()

  const actual = ["80000","76000","34000","65000"]
  const receipt = ["8000","7600","3400","6500"]



  return (
    <>
    
<CRow style={{ marginTop: "2%" }}>
            <CCol style={{ marginTop: "4%" }} sm={4}>
              <CWidgetStatsA
                className="mb-4"
                color="info"
                value={
                  <>
                    680000000{' Cr'}
                    {/* <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span> */}
                  </>
                }
                title="Total Budget"
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

           
            <CCol style={{ marginTop: "4%" }} sm={4}>
              <CWidgetStatsA
                className="mb-4"
                color="danger"
                value={
                  <>
                    7000{' Cr '}
                    {/* <span className="fs-6 fw-normal">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span> */}
                  </>
                }
                title="Total Expense"
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
            <CCol style={{ marginTop: "4%" }} xs={4} >
              <CWidgetStatsB
                style={{ height: "160px"}}
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="Free Budget"
                value="89.9%"
              />
            </CCol>
          </CRow>
    <CRow>
    <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a> </a>
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

          </CDropdownMenu>
        </CDropdown>
       
        
          </CCardHeader>
          
    <CRow>
    <CRow>
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Budget Head Details</strong>
          </CCardHeader>
          <CCardBody>
                <CButton color="danger"  size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="0" >
                  Total Demand No
                  <p fontSize="medium" style={{color:'black'}} >6</p>
                </CButton>
                <CButton color="danger"  size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="0" >
                  Total Major Heads
                  <p fontSize="medium" style={{color:'black'}} >100</p>
                </CButton>
                <CButton color="danger" size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="1" >
                  Total Sub Major Heads
                  <p fontSize="medium" style={{color:'black'}} >60</p>
                </CButton>
                <CButton color="danger" size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="1" >
                  Total Minor Heads
                  <p fontSize="medium" style={{color:'black'}} >150</p>
                </CButton>
                <CButton color="danger" size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="1" >
                  Total Sub Heads
                  <p fontSize="medium" style={{color:'black'}} >30</p>
                </CButton>
               

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
    <CCol xs={4}>
        <CCard className="mb-3">
          <Link to={'/dashboard/ifms/headwiseexpense'}>
          <CCardHeader> Major Head Wise Expense (in Cr)</CCardHeader>
          </Link>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['0000', '2225',  '2852', '4059'],
                datasets: [
                  {
                    data: [newRandom(), newRandom(),newRandom(),newRandom()],
                    backgroundColor: ['#36A2EB','#FF6384','#36A3A2','rgba(54, 162, 235, 0.2)'],
                    hoverBackgroundColor:['#36A2EB','#FF6384','#36A3A2','rgba(54, 162, 235, 0.2)'],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader> Wing Wise Expense (in Cr)</CCardHeader>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['NH', 'SH',  'Panchayat', 'World bank', 'Capital Project', 'Policy Planning', 'QC'],
                datasets: [
                  {
                    data: [newRandom(), newRandom(),newRandom(),newRandom(),newRandom(),newRandom(),newRandom()],
                    backgroundColor: ['#36A2EB','#FF6384','#36A3A2','#C0C0C0','#EDDA74','#FFEBCD','rgba(54, 162, 235, 0.2)'],
                    hoverBackgroundColor:['#36A2EB','#FF6384','#36A3A2','#C0C0C0','#EDDA74','#FFEBCD','rgba(54, 162, 235, 0.2)'],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader> Wing Wise Budget Used (in Cr)</CCardHeader>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['UnAllocated', 'NH', 'SH',  'Panchayat', 'World bank', 'Capital Project', 'Policy Planning', 'QC'],
                datasets: [
                  {
                    data: [newRandom(), newRandom(), newRandom(),newRandom(),newRandom(),newRandom(),newRandom(),newRandom()],
                    backgroundColor: ['#36A2EB','#FF6384','#36A3A2','#AF7817','#C0C0C0','#EDDA74','#FFEBCD','rgba(54, 162, 235, 0.2)'],
                    hoverBackgroundColor:['#36A2EB','#FF6384','#36A3A2','#AF7817','#C0C0C0','#EDDA74','#FFEBCD','rgba(54, 162, 235, 0.2)'],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader>Status Report </CCardHeader>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['Not Started', 'Work Done'],
                datasets: [
                  {
                    data: [newRandom(), newRandom()],
                    backgroundColor: ['#36A2EB','#FF6384'],
                    hoverBackgroundColor: [ '#36A2EB','#FF6384'],
                  },
                ],
              }}
              
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol>
      <CCard className="mb-3">
          <CCardHeader>Budget,Expense,Balance Department Wise </CCardHeader>
          <CCardBody>
            <CChartBar
            data={{
              labels: ["NH", "SH", "Panchayat", "CP", "PP"],
              datasets: [
                {
                  label: 'Budget',
                  backgroundColor: '#f87979',
                  stack: 'Stack 0',
                  data: [newRandom(), newRandom(), newRandom(), newRandom(), newRandom()],
                },
                {
                  label: 'Expense',
                  stack: 'Stack 1',
                  data: [newRandom()/2 , newRandom()/2, newRandom()/2, newRandom()/2, newRandom()/2],
                  backgroundColor: '#36A2EB',
                },
                {
                  label: 'Balance',
                  stack: 'Stack 3',
                  data: [newRandom()/3, newRandom()/3, newRandom()/3, newRandom()/3, newRandom()/3],
                  backgroundColor: 'rgba(220, 159, 49, 0.2)',
                },
              ],
            }}
            labels="months"
            ></CChartBar>
            </CCardBody>
            </CCard>

      </CCol>
	   
	   
    </CRow>
    <CRow>
      <CCol style={{flex:"0 0", width:"60%", marginTop:"2%"}}>
        <CCard className="mb-4">
        <CCardHeader>
            <strong>Budget Grant Expenditure Status</strong>
          </CCardHeader>
          <CCardBody>

          <BasicTable></BasicTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
        <CCardHeader>
            <strong>Actual Receipt Vs Budget Estimate (on Loan Type)</strong>
          </CCardHeader>
          <CCardBody>

          <CChartBar
            data={{
              labels: ["GOI", "INST", "MKT", "NSSF"],
              datasets: [
                {
                  label: 'Budget Receipt (Rs in Cr)',
                  backgroundColor: '#f87979',
                  stack: 'Stack 0',
                  data: actual, 
                },
                {
                  label: 'Actual Receipt Till Date (Rs in Cr)',
                  stack: 'Stack 1',
                  data: receipt,
                  backgroundColor: '#36A2EB',
                },
                
              ],
            }}
            labels="months"
            ></CChartBar>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
        <CCardHeader>
            <Link to={'/dashboard/ifms/schemewisedata'}>
            <strong>Number of Scheme Work Type Wise</strong>
            </Link>
          </CCardHeader>
          <CCardBody>

          <CChartBar
            data={{
              labels: ["Road", "Bridge", "Building", "Others"],
              datasets: [
                {
                  label: 'Scheme Count',
                  backgroundColor: '#f9b115',
                  stack: 'Stack 0',
                  data: ['4','8','13','38'], 
                },
                
              ],
            }}
            labels="months"
            ></CChartBar>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </CCard>
    </CRow>
    
    
    </>
  )
}

export default IFMS
