import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './layout.css'

const Layout = ({children, title}) => {
  return (
    <>
      <div className='layout-container'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='nav-content'>
          <div className='navContainer'>
            <Navbar title={title} />
          </div>
        <div className='dash-container'>
          {children}
        </div>
        </div>
      </div> 
    </>
  )
}

export default Layout