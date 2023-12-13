import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);

  const userClick = () =>{
    setIsInvestModalOpen(true);
  } 

  const EditClick = () =>{
    setIsInvestModalOpen(true);
  }

  const securityClick = () =>{
    setIsInvestModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsInvestModalOpen(false);
    setSelectedSection(null);
  };

  return (
    <div className='profile'>
      <div className='profile-background'>
        <div className='profile-nav'>
        <div className='nav nav-profile' onClick={userClick} style={{ textDecoration: 'none' }}>
          <div className='nav-logo invest'></div>
          <h4>User Profile</h4>
        </div>

        <div className='nav nav-profile' style={{ textDecoration: 'none' }}>
          <div className='nav-logo invest' ></div>
          <h4>Security Settings</h4>
        </div>

        <div className='nav nav-profile' style={{ textDecoration: 'none' }}>
          <div className='nav-logo invest'></div>
          <h4>KYC Verifications</h4>
        </div>
        </div>
      </div>

      {isInvestModalOpen &&
        selectedSection && ( 
          <div className='dede'>dede</div>
        )
      }
    </div>
  )
}

export default Profile