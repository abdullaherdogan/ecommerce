import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import DashboarPageHeader from '../../components/DashboardPageHeader'
import { useLocation } from 'react-router-dom'
const Layout = ({isDashBoard}) => {
  const location = useLocation().pathname.split('/');
  console.log(location)
  return (
    <div className={isDashBoard ? 'dashboard':''}>
        {isDashBoard && <Sidebar/>}
        <div className={isDashBoard ? 'dashboard-content' : ''}>
            {isDashBoard && <DashboarPageHeader pageTitle={location[location.length -1]} />}
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout