import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidenavbar from './Sidenavbar'

const Layout = () => {
  return (
    <div>
        
        <Sidenavbar />
        <Outlet />
    </div>
  )
}

export default Layout