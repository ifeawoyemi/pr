import React from 'react';
import './userinvestment.css';
import Chevron from '../icons/Chevron';

const UserInvestment = () => {
  return (
    <div className='wiglet-container'>
      <div className='welcome-container'>
        <h1>See how your investments are doing</h1>
        <p>Invest with us to earn daily rewards</p>
      </div>

      <div className='investments_container'>
        <div className='invest-wing invests'>
          <div>
            <h6>Balance of Investments</h6>
            <h1>AFR 0.00</h1>
            <input type="" placeholder='NGN 0.00' />
          </div>
        </div>

        <div className='help'>
          <h3>Reach out to us</h3>
          <p>Talk to our support if you’re experiencing any issues</p>
        </div>
      </div>

      <div className='transactions invest-record'>
        <div className='money'>
          <div className='recent'>
            <h5>Your Future with us</h5>
            <div className='input-container'>
             <input type='' placeholder='7 days' />
             <div className='img-container'>
               <Chevron />
             </div>
           </div>
          </div>

          <div className='plans'>
            <div className='future-plans'>
              <h3>21/09</h3>
              <span className='one'></span>
              <h4>AFR 0.00</h4>
            </div>
          </div>
        </div>

        <div className='plain-sheet'>
          <div className='title'>
            <h2>Your Plans</h2>
          </div>

          <div className='create-plans'>
            <Chevron/>
            <h3>Create an investment plan</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInvestment