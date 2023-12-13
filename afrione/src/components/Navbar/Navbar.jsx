import React from 'react';
import './navbar.css';
import Menu from '../images/menu.png'
import { useState } from 'react';

const Navbar = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
    console.log('is open open');
  }

  return (
    <div className='nav-container'>
      {/* <div className={`menu-container ${isMenuOpen ? 'menu-open' : ''}`}> */}
        <div className='menu-container'>
        <div className='menu' onClick={toggleMenu}>
          <img src={Menu} alt="" />
        </div>
        <div className='header'>
          {page}
        </div>
      </div>
      <div className='notify'>
      </div>
      {
        isMenuOpen && (
          <div className='overlay'>
          Dashboard
          </div>
        )
      }
    </div>
  )
}

export default Navbar