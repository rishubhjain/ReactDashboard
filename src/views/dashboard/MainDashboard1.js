import React, { lazy } from 'react'
import 'react-base-table/styles.css'
import 'chart.piecelabel.js';
import './Main.css'

import  { useState } from 'react'

// project imports
import { Card} from 'src/components/Card'

import {
CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,  
  CCard,
  CCardBody,
  CCardHeader,
  CCol,  
  CRow,

} from '@coreui/react'


const MainDashboard = () => {
  
   let ddValue = "Yearly"

  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const onCardExpand = title => {
    setOpen(true)
    setContent(title)
  }

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
  <CDropdown style={{float:'right',marginLeft:'2%'}}> 
          <CDropdownToggle  value={ddValue} id='timeLineDD'  color="light">Yearly</CDropdownToggle>
          <CDropdownMenu >
          <CDropdownItem onClick={(event) => {return true;}}>Monthly</CDropdownItem>
            <CDropdownItem >Weekly</CDropdownItem>
            <CDropdownItem >Custom Date</CDropdownItem>
            
          </CDropdownMenu>
        </CDropdown>
            <CDropdown
            style={{float:'right',marginLeft:'2%'}}> 
          <CDropdownToggle  color="light">All Wings</CDropdownToggle>
          <CDropdownMenu  >
            <CDropdownItem >All Wings</CDropdownItem>
            <CDropdownItem  href=''>State</CDropdownItem>
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
  </CCard>
    </CRow>
    <CRow>
     
       <Card className="dcard" title='Work Monitoring System' >
    

      </Card>
     
    </CRow>
    
    </>
  )
}

export default MainDashboard
