import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='afri-logo'>
        </div>
        <div className='nav-contain'>
            <div className='nav'>
            <div className='nav-logo dashboard'>
            </div>
            <h4>Dashboard</h4>
            </div>

            <div className='nav'>
            <div className='nav-logo purse'>
            </div>
            <h4>My Purse</h4>
            </div>

            <div className='nav'>
            <div className='nav-logo invest'>
            </div>
            <h4>Investment</h4>
            </div>

            <div className='nav'>
            <div className='nav-logo transact'>
            </div>
            <h4>Transaction</h4>
            </div>

            <div className='nav'>
            <div className='nav-logo user'>
            </div>
            <h4>User Profile</h4>
            </div>
        </div>

        <footer>
            <div className='logout-icon'>
            </div>
            <h4>LogOut</h4>
        </footer>
    </div>
  )
}

export default Navbar