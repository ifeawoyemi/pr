import React from 'react';
import { Link } from 'react-router-dom';
import "./afrione.css";
import LogoIcon from '../../components/images/Logos.png';

const AfriOne = () => {
  return (
        <div className='Brand-container'>
            <div className='upper'>
              <div className='AfriLogo'>
                <img src={LogoIcon} alt="" />
              </div>
            </div>
            <div className='lower'>
                <h1>Growing Your Wealth, Simply</h1>
                <p>Setup your account and beon your way 
                  to complete control of your finances</p>
            </div>
            <div className='brand-footer'>
                <p font-size='21'>&copy; Afrione. Alrights reserved. 
                <Link to="/"style={{color: "#B2FA63", textDecoration: "none"}}>Terms & Conditions Privacy Policy</Link></p>
            </div>
        </div>
  )
}

export default AfriOne