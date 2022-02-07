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
import { CChartBar,
  CChartPie, } from '@coreui/react-chartjs'
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



  return (
    <>
    
    <CRow>
    <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a> IFMS</a>
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
          <CDropdownToggle color="light">Ahmedabad Circle</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Ahmedabad Circle</CDropdownItem>

          </CDropdownMenu>
        </CDropdown>
       
        
          </CCardHeader>
          
    <CRow>
      
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
    <CRow>
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Budget Head Details</strong>
          </CCardHeader>
          <CCardBody>
           
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
                <CButton color="danger"  size="xl" style={{width:'200px'}}  className="me-md-3" variant="outline" key="2" >
                  Total budget
                  <p fontSize="medium" style={{color:'black'}} >68000000 Cr</p>
                </CButton>
                <CButton color="danger"  size="xl" style={{width:'150px'}}  className="me-md-3" variant="outline" key="3" >
                  Total Expense
                  <p fontSize="medium" style={{color:'black'}} >70 Cr</p>
                </CButton>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
    <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader> Major Head Wise Expense (in Cr)</CCardHeader>
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
    
    </CCard>
    </CRow>
    </>
  )
}

export default IFMS
