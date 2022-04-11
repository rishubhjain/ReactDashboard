import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const MainDashboard = React.lazy(() => import('./views/dashboard/MainDashboard1'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'MainDashbaord', component: MainDashboard, exact: true },
]

export default routes
