import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../components/icons/Arrow';
import AfriOne from '../components/AfriOne/AfriOne';
import '../../src/pages/verify.css';

const Verify = () => {
  const [otp, setOtp] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const validateOtp = () => {
    const requiredOtp = 'ade';
    if (otp !== requiredOtp) {
      setError('Incorrect OTP');
      return false;
    }
    return true;
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (validateOtp()) {
      navigate('/modal');
    }
  };

  return (
    <div>
      <div className='verify-container'>
        <div>
          <AfriOne />
        </div>
        <div className='verify'>
          <div className='verify-icon'>
            <Link to=''><Arrow /></Link>
          </div>
          <h1>Verify your account</h1>
          <p>Enter the verification code sent to your mail or your phone number</p>
          <form onSubmit={createAccount}>
            <input
              type='password'
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p style={{ color: 'red', padding: '2px' }}>{error}</p>}
            <button type='submit'>Submit</button>
            <h5>Didn't receive OTP?<span> Resend</span></h5>
          </form>
        </div>
      </div>

      <footer className='footer'>
        <p font-size='21'>&copy; Afrione. Alrights reserved.
        </p>
        <span>
           Terms & Conditions Privacy Policy
        </span>
      </footer>
    </div>
  );
};

export default Verify;
