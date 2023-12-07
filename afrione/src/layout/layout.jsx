import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './layout.css'

const Layout = ({children, page}) => {
  return (
    <div className='layout-container'>
      <div className='side'>
        <Sidebar />
      </div>
      <div className='nav-content'>
        <div className='navContainer'>
          <Navbar page={page} />
        </div>
        <div className='Dash-container'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout