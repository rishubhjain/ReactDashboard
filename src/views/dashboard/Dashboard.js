import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,  
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,  

} from '@coreui/react'
import { CChartBar, CChartLine,
  CChartPie, } from '@coreui/react-chartjs'
import {DocsExample } from 'src/components'
import OrgChart from '@unicef/react-org-chart'

import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
	
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const newRandom = () => {
    return Math.round(Math.random() * 100)
  }

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>

    <CRow>
    <CCol xs={4}>
        <CCard className="mb-3">
          <CCardHeader>Work</CCardHeader>
          <CCardBody>
            <CChartPie
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
    </CRow>
          
          
    <CRow>
	   <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader className="me-md-3">
            <a>Work Type Status</a>
          <CDropdown style={{marginLeft:'55%'}}> 
          <CDropdownToggle color="light">Location</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">All</CDropdownItem>
            <CDropdownItem href="#">SH</CDropdownItem>
            <CDropdownItem href="#">NH</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
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
	   
	   <CCol xs={6}>
        <CCard className="mb-4">
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
	  <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button</strong> <small>Pill</small>
          </CCardHeader>
          <CCardBody>
           
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Total
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger" size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  In Process
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Delay 50%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Delay 100%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Delay 200%
                  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                <CButton color="danger"  size="lg" style={{width:'150px'}}  className="me-md-3" variant="outline" key="0" >
                  Completed
				  <p fontSize="medium" style={{color:'black'}} >10</p>
                </CButton>
                

          </CCardBody>
        </CCard>
      </CCol>
	  </CRow>
      
    </>
  )
}

export default Dashboard
