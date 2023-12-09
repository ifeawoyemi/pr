import React, { useState } from 'react'
import './dashboard.css';
import Chevron from '../icons/Chevron'
import Transact from '../Transact/Transact';
import Levels from '../Levels/Levels';
import X from '../images/x.png';
import Educate from '../images/Graduation Cap.png';
import Health from '../images/Atom.png';
import Funeral from '../images/Graduation Cap.png';
import Atom from '../images/Atom.png';

const Dashboard = () => {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);

  const handleInvestClick = () => {
    setIsInvestModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInvestModalOpen(false);
  };

  return (
    <div className={`wiglet-container ${isInvestModalOpen ? '' : 'blur'}`}>
        <div className='welcome-container'>
        <h1>Welcome Kabir</h1>
        <p>Get daily reward points when you invest with us</p>
      </div>

      <div>
        <div className='wing'>
          <div className='balance-wing'>
            <div>
              <h3>Available Balance</h3>
              <h1>AFR 0.00</h1>
              <div className='input-container'>
                <input type='' placeholder='NGN 0.00' />
                <div className='img-container'>
                  <Chevron />
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleInvestClick}>Invest</button>
            </div>
          </div>
          <div className='invest-wing'>
            <div>
              <h6>Investment Balance</h6>
              <h1>AFR 0.00</h1>
              <input type="" placeholder='NGN 0.00' />
            </div>
          </div>
        </div>

        <div className='lower-wing'>
          <div>
            <Transact />
          </div>
          <div>
            <Levels />
          </div>
        </div>
      </div>

      {isInvestModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <div>
            <img src={X} alt="Close" onClick={handleCloseModal} />
            </div>
            <h1>What do you want to invest in</h1>

            <div className='investment'>
              <div className='education'>
                <img src={Educate} alt="" />
                <h3>Education</h3>
              </div>

              <div className='education'>
                <img src={Health} alt="" />
                <h3>Health Insurance</h3>
              </div>

              <div className='education'>
                <img src={Educate} alt="" />
              </div>

              <div className='education'>
                <img src={Educate} alt="" />
              </div>

              <div className='education'>
                <img src={Educate} alt="" />
              </div>

              <div className='education'>
                <img src={Educate} alt="" />
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard