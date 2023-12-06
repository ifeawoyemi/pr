import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../../utils/UserDetails'
import AfriOne from '../../components/AfriOne/AfriOne';
import './loginpage.css';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [loginSuccessful, setLoginSuccessful] = useState(false);
    const navigate = useNavigate();

    const validateLogin = () => {

        const user = userDetails().find(
            (user) => user.Email === email && user.password === password
        );

        if (user) {
            return true;
        } else {
            setError('Incorrect Email');
            // setLoginSuccessful(false);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if (validateLogin()) {
            navigate('/home')
        }
    };

    return (
        <div className='login-layer'>
            <div>
                <AfriOne />
            </div>
            <div>
                <div className='login-modal'>
                    <h1>Login to your Account</h1>
                    <form onSubmit={handleLogin}>
                        <div className='input-field'>
                            <label className='label'>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@afrione.io' />
                            {error && <p style={{ color: 'red', padding: '1px' }}>{error}</p>}
                        </div>
                        <div className='input-field'>
                            <label className='label'>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='input your password' />
                            {error && <p style={{ color: 'red', padding: '0.5px' }}>{error}</p>}
                        </div>
                        <div className='dd'>
                            <div className='ddd'>
                                <input
                                    id='checkbox'
                                    type="checkbox"
                                />
                                <h4>Remember me</h4>
                            </div>
                            <div>
                                <h4>Forgot Password</h4>
                            </div>
                        </div>
                        <button className='login'>Login</button>
                        <div className='dd'>
                            <h4>You're new here?
                                <span>Create Account</span>
                            </h4>
                        </div>
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
    )
}

export default LoginPage