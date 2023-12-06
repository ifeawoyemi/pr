import React from 'react';
import { Link } from 'react-router-dom';
// import LogoIcon from '../icons/Logo';
import "./afrione.css"

const AfriOne = () => {
  return (
        <div className='container'>
            <div className='upper'>
              <div className='AfriLogo'>
                {/* <LogoIcon/> */}
              </div>
            </div>
            <div className='lower'>
                <h1>Growing Your Wealth, Simply</h1>
                <p>Setup your account and beon your way 
                  to complete control of your finances</p>
            </div>
            <footer>
                <p font-size='21'>&copy; Afrione. Alrights reserved. 
                <Link to="/"style={{color: "#B2FA63", textDecoration: "none"}}>Terms & Conditions Privacy Policy</Link></p>
            </footer>
        </div>
  )
}

export default AfriOne