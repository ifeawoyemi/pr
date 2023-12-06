import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../components/icons/Logo';
import './modal.css';

const Modal = () => {
  const [activeSection, setActiveSection] = useState(1);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (activeSection === 1) {
      setActiveSection(2);
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      {activeSection === 1 && (
        <>
          <div className='mode-container'>
            <div className='upper-layer'>
              <LogoIcon style={{ width: '100%' }} />
            </div>

            <div className="modal-container">
              <h1>Hurray 🎉</h1>
              <p>Your account has been activated. Let's get right into it🤩</p>
              <button type='button' onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </>
      )}

      {activeSection === 2 && (
        <>
          <div className='welcome'>
            <div className='welcome-page'>
              <div className='welcome-layer'>
                <LogoIcon style={{ width: '100%' }} />
              </div>
              <div className='greeting'>
                <h1>Welcome to AfriOne</h1>
              </div>
            </div>
            <div>
              <div className="modal-container">
                <h1>Hurray 🎉</h1>
                <p>Your account has been activated. Let's get right into it🤩</p>
                <button type='button' onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
