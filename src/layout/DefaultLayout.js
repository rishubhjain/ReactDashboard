import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (props) => {

  const myProps = {
    type1:props.type1,
    type2:props.type2,
    type3:props.type3,
    type4:props.type4,
    state:props.state,
    national:props.national,
    panchayat:props.panchayat,
    startDate:props.startDate,
    endDate:props.endDate
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column  bg-light">
        <AppHeader />
        <div className="temp1" style={{ backgroundColor:'rgb(227, 242, 253)'}}>
          <AppContent {...myProps} />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
