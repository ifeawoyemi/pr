import React from 'react';
import './navbar.css';
// import { useState } from 'react';

const Navbar = ({page}) => {


  return (
    <div className='header-container'>
      <div className='header'>
        {page}
      </div>
      <div className='notify'>
      </div>
    </div>

    
  )
}

export default Navbar