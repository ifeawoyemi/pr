import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  useEffect(() => {
    setIsInvestModalOpen(true);
    setSecurityOpen(false);
  }, []);

  const userClick = () => {
    setIsInvestModalOpen(true);
    setSecurityOpen(false);
  };


  const securityClick = () => {
    setSecurityOpen(true);
    setIsInvestModalOpen(false);
  }

  const [username, setUsername] = useState('');
  const [useremail, setUserEmail] = useState('')
  const [country, setCountry] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    let users_data = JSON.parse(localStorage.getItem('user_db'));
    let user_email = JSON.parse(localStorage.getItem('current_email'));

    const hg = users_data.find(user => user.email === user_email);

    console.log('yes: ', hg)
    setUsername(`${hg.firstName} ${hg.lastName}`);
    setUserEmail(hg.email);
    setMobileNumber(hg.mobileNumber);
    setCountry(hg.country)
  }

  )

  // const handleCloseModal = () => {
  //   setIsInvestModalOpen(false);
  //   setSelectedSection(null);
  // };

  return (
    <div className='profile'>
      <div className='profile-background'>
        <div className='profile-nav'>
          <div className='nav nav-profile' onClick={userClick} style={{ textDecoration: 'none' }}>
            <div className='nav-logo invest'></div>
            <h4>User Profile</h4>
          </div>

          <div className='nav nav-profile' onClick={securityClick} style={{ textDecoration: 'none' }}>
            <div className='nav-logo invest' ></div>
            <h4>Security Settings</h4>
          </div>

          <div className='nav nav-profile' style={{ textDecoration: 'none' }}>
            <div className='nav-logo invest'></div>
            <h4>KYC Verifications</h4>
          </div>
        </div>
      </div>

      {isInvestModalOpen && (
        <div className='anchor'>
          <div className='user-db'>
            <button>Edit user Details</button>
          </div>

          <div className='user-data-container'>
            <div className='user-data'>
              <h5>Full Name</h5>
              <h4>{username}</h4>
            </div>

            <hr />

            <div className='user-data'>
              <h5>Email</h5>
              <h4>{useremail}</h4>
            </div>

            <hr />

            <div className='user-data'>
              <h5>Phone Number</h5>
              <h4>{mobileNumber}</h4>
            </div>

            <hr />

            <div className='user-data'>
              <h5>Country</h5>
              <h4>{country}</h4>
            </div>
          </div>
        </div>
      )
      }

      {
        securityOpen && (
          <div className='anchor'>
            <div className='update-password'>
              <h2>Security Settings</h2>
              <h5>update your password</h5>

              <form action="">
                <div className='control'>
                  <label>Current Password</label>
                  <input type="password"
                    placeholder='******' />
                </div>

                <div className='control'>
                <label>New Password</label>
                  <input type="password"
                    placeholder='******' />
                </div>

                <button
                type='submit'>Continue
              </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Profile