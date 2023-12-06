import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AfriOne from "../../components/AfriOne/AfriOne";
import Arrow from '../../components/icons/Arrow';
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [emailSuccessful, setEmailSuccessful] = useState(false);
  const [error, setError] = useState();

  const handleContinue = (e) => {
    e.preventDefault();
    const RequiredEmail = 'ifeawoyemi@gmail.com';
    if (RequiredEmail === email) {
      setEmailSuccessful(true)
    } else {
      alert('email incorrect')
      setEmailSuccessful(false)
    }
  }

  const validateInputs = () => {
    if (!firstName.trim()) {
      setError('First Name cannot be blank')
      return false;
    }

    if (!lastName.trim()) {
      setError('Last Name cannot be blank');
      return false;
    }

    if (mobileNumber.length < 11) {
      setError('Mobile Number must be at least 11 digits');
      return false;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    return true;
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      console.log("This is valid input: ")
      navigate("/verify")
    }
  }

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className='main-container'>
      <div className='left-container'>
        <AfriOne />
      </div>

      {
        emailSuccessful ? (
          <div className='final'>
            <div className='arrow'>
              <Link to='/'><Arrow /></Link>
            </div>
            <h1 className=''>Enter your details to get started</h1>
            <form onSubmit={handleClick}>

              <div className='control'>
                <label> First Name</label>
                <input type="text"
                  placeholder='Osazee'
                  onChange={(e) => setFirstName(e.target.value)} />
                {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
              </div>

              <div className='control form'>
                <label>Last Name</label>
                <input type="text"
                  placeholder='Osazee'
                  onChange={(e) => setLastName(e.target.value)} />
                {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
              </div>

              <div className='control form'>
                <label>Phone Number</label>
                <input type="number"
                  placeholder='08145063120'
                  onChange={(e) => setMobileNumber(e.target.value)} />
                {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
              </div>

              <div className='control form'>
                <label>Country</label>
                <input type="text" />
                {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
              </div>

              <div className='control form'>
                <label>Password</label>
                <input type="password"
                  placeholder='input your password'
                  onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
              </div>

              <button
                type='submit'>Create Account
              </button>

              <div className='login'>
                <p>Already have an account?
                  <Link to="/" style={{ textDecoration: 'none', color: '#103333' }}>Login here</Link>
                </p>
              </div>
            </form>
          </div>) : (
          <div className='right-container'>
            <h1>Enter your Email to get Started</h1>

            <form onSubmit={handleContinue}>
              <div className='form-field'>
                <label>Email</label>
                <input
                  type="email"
                  placeholder='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type='submit'>Continue</button>
              </div>
              <div className='register'>
              </div>
              <div className='icons'>
                <div className='googleIcon'>
                </div>
                <div className='appleIcon'>
                </div>
              </div>
              <div className='login'>
                <p>Already have an account?
                  <span onClick={handleLoginClick} style={{ cursor: 'pointer', color: '#103333' }}>
                    Login here
                  </span>
                </p>
              </div>
            </form>
          </div>

        )
      }

      <footer className='footer'>
        <p font-size='21'>&copy; Afrione. Alrights reserved.
        </p>
        <span>
           Terms & Conditions Privacy Policy
        </span>
      </footer>
    </div>
  )
}

export default SignUp