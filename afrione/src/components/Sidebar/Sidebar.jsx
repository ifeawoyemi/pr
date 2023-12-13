import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='side-container'>
      <div className='afri-logo'>
      </div>
      <div className='nav-contain'>
        <NavLink to='/dashboard' className='nav' style={{ textDecoration: 'none' }}>
          <div className='nav-logo dashboard'></div>
          <h4>Dashboard</h4>
        </NavLink>

        <NavLink to='/purse' className='nav' style={{ textDecoration: 'none' }}>
          <div className='nav-logo purse-logo'></div>
          <h4>My Purse</h4>
        </NavLink>

        <NavLink to='/investment' className='nav' style={{ textDecoration: 'none' }}>
          <div className='nav-logo invest'></div>
          <h4>Investment</h4>
        </NavLink>

        <NavLink to='/transaction' className='nav' style={{ textDecoration: 'none' }}>
          <div className='nav-logo transact'></div>
          <h4>Transaction</h4>
        </NavLink>

        <NavLink to='/profile' className='nav' style={{ textDecoration: 'none' }}>
          <div className='nav-logo user'></div>
          <h4>User Profile</h4>
        </NavLink>
      </div>

      <footer>
        <div className='logout-icon'>
        </div>
        <h4>LogOut</h4>
      </footer>
    </div>
  )
}

export default Sidebar