import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Menu from '../images/menu.png'
import Cancel from '../images/x.png'

const Navbar = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notify, setNotify] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(true);
    console.log('is open open');
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div style={{ position: "relative" }}>
      <div className='nav-container'>
        <div className='menu-container'>
          <div className='menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={Menu} style={{ width: '27px' }} alt="" />
          </div>
          <div className='header'>
            {title}
          </div>
        </div>
        <div className='notify'>

        </div>
      </div>
      {
        isMenuOpen && (
          <div className="nav-mobile" >
            <div className="">
              <img src={Cancel} onClick={closeMenu} style={{ width: '25px' }} alt="" />
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
          </div>
        )
      }

    </div>
  )
}

export default Navbar