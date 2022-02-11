import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Main Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
    items:[
      {
        component: CNavItem,
        name: 'WMS Dashboard',
        to: '/dashboard/wms'
      },
      {
        component: CNavItem,
        name: 'SAATHI Dashboard',
        to: '/dashboard/hrms'
    
      },
      {
        component: CNavItem,
        name: 'HRMS Dashboard',
        to: '/dashboard/hrms'
    
      },
      {
        component: CNavItem,
        name: 'IWDMS Dashboard',
        to: '/dashboard/iwdms'
    
      },
      {
        component: CNavItem,
        name: 'IFMS Dashboard',
        to: '/dashboard/ifms'
    
      },
      {
        component: CNavItem,
        name: 'GUJRAMS Dashboard',
        to: '/dashboard/gujrams'
    
      },
      {
        component: CNavItem,
        name: 'GUJMARG Dashboard',
        to: '/dashboard/gujmarg'
    
      },
      {
        component: CNavItem,
        name: 'E-RAP Dashboard',
        to: '/dashboard/hrms'
    
      },]
  },
  {
      component: CNavGroup,
      name: 'Services',
      to: '/dashboard',
      icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      items:[{
        component: CNavItem,
        name: 'WMS',
        to: '/dashboard'
  },
  {
        component: CNavItem,
        name: 'SAATHI',
        to: '/dashboard'
  },
  {
        component: CNavItem,
        name: 'IFMS',
        to: '/dashboard'
      }],
  },
  {
    component: CNavTitle,
    name: 'Features',
  },
  {
    component: CNavItem,
    name: 'MIS Reports',
    to: '/',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Config',
    to: '/',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
