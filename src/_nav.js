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
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'HRMS Dashboard',
    to: '/dashboard/hrms',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />

  },
  {
    component: CNavItem,
    name: 'IWDMS Dashboard',
    to: '/dashboard/iwdms',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />

  },
  {
    component: CNavTitle,
    name: 'WMS',
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'SAATHI',
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'IFMS',
  },
  {
    component: CNavItem,
    name: 'Login',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/dashboard',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  
]

export default _nav
