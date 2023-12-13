import React from 'react';
import './navbar.css';

const Navbar = ({page}) => {


  return (
    <div className='nav-container'>
      <div className='header'>
        {page}
      </div>
      <div className='notify'>
      </div>
    </div>  
  )
}

export default Navbar