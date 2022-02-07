import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

export const PopupModal = (props) => {

    return <CModal alignment="center" visible={props.visible} onClose={() => props.setVisible(false)}>
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
        <CButton color="secondary" onClick={() => props.setVisible(false)}>
          Close
        </CButton>
        
      </CModalFooter>
    </CModal>
}

PopupModal.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func
}