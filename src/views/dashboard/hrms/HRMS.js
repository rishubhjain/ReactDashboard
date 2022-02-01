import React, { lazy } from 'react'
import 'react-base-table/styles.css'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,  
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import { CChartBar,
  CChartPie, } from '@coreui/react-chartjs'


const HRMS = () => {

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }


  return (
    <>
    
    <CRow>
    <CCard className="mb-4">

          <CCardHeader className="me-md-3">
            <a> Human Resource Management</a>
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
      
    <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader>Available Resources</CCardHeader>
          <CCardBody>
            <CChartPie
              
              //onClick={() => setVisible(!visible)}
              data={{
                labels: ['Filled', 'Vacant'],
                datasets: [
                  {
                    data: [newRandom(), newRandom()],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      
	   
	   <CCol xs={8}>
        <CCard className="mb-6">
          <CCardHeader> Available Resource
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
                }, 
               
              }
            }}
              data={{
                labels: ['CE','SE','EE','DEE','AEE'],
                datasets: [
                  {
                    label: 'Total',
                    backgroundColor: '#f87979',
                    stack: 'Stack 0',
                    data: [newRandom(), newRandom(), newRandom(), newRandom(),newRandom()],
                  },
                  {
                    label: 'Occupied',
                    stack: 'Stack 1',
                    data: [newRandom() , newRandom(), newRandom(), newRandom(), newRandom()],
                    backgroundColor: 'rgba(220, 159, 49, 0.2)',
                  },
                  {
                    label: 'Vacant',
                    stack: 'Stack 2',
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

export default HRMS
