import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AfriOne from "../../components/AfriOne/AfriOne";
import Arrow from '../../components/icons/Arrow';
import "./signup.css";
import swal from "sweetalert"

const userDB = [
  {
    "email": "john@doe.com",
    "firstName": "John",
    "lastName": "Doe",
    "country": "Nigeria",
    "mobileNumber": "+2348135187981"
  }
]

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [emailSuccessful, setEmailSuccessful] = useState(false);
  const [error, setError] = useState();

  const [userDetails, setUserDetails] = useState([]);

  const getDataFromLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem("user_db"));
    setUserDetails(data)
  }

  useEffect(() => {
    getDataFromLocalStorage()
  }, [])


  const handleContinue = (e) => {
    e.preventDefault();

    const hg = userDetails.find(user => user.email === email);

    if (hg) {
      swal({
        title: "Ooooppssss",
        text: "Email, is available in database. Kindly login",
        icon: "Error",
        button: "Close"
      })
      navigate("/login");
    } else {
      setEmailSuccessful(true)
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
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      let user_data = {
        firstName,
        lastName,
        email,
        mobileNumber,
        country
      }

      userDB.push(user_data);
      localStorage.setItem("user_db", JSON.stringify(userDB))
      localStorage.setItem("current_email", JSON.stringify(email))
      navigate("/dashboard")
    } else {
      // FIX THIS
    }
  }

  const backArrow = () =>{
    setEmailSuccessful(false)
  }


  return (
    <div className='main-container'>
      <div className='left-container'>
        <AfriOne />
      </div>

      {
        emailSuccessful ? (
          <div className='final'>
            <div className='arrow' onClick={backArrow}>
              <Link to='/'><Arrow /></Link>
            </div>
            <h1 className=''>Enter your details to get started</h1>
            <form onSubmit={handleSubmit}>

              <div className='control'>
                <label> First Name</label>
                <input type="text"
                  placeholder='John'
                  onChange={(e) => setFirstName(e.target.value)} />
              </div>

              <div className='control form'>
                <label>Last Name</label>
                <input type="text"
                  placeholder='Doe'
                  onChange={(e) => setLastName(e.target.value)} />
              </div>

              <div className='control form'>
                <label>Phone Number</label>
                <input type=""
                  placeholder='08145063120'
                  onChange={(e) => setMobileNumber(e.target.value)} />
             </div>

              <div className='control form'>
                <label>Country</label>
                <input type="text"
                  placeholder='Nigeria'
                  onChange={(e) => setCountry(e.target.value)} />
              </div>

              <div className='control form'>
                <label>Password</label>
                <input type="password"
                  placeholder='input your password'
                  onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button
                type='submit'>Create Account
              </button>

              <div className='login'>
                <p>Already have an account?
                  <Link to="/login" style={{ textDecoration: 'none', color: '#103333' }}>Login here</Link>
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
                  <Link to={'/login'} style={{ cursor: 'pointer', color: '#103333' }}>
                    Login here
                  </Link>
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