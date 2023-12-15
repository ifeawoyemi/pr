import React from 'react';
import './userinvestment.css';
import Chevron from '../icons/Chevron';

const UserInvestment = () => {
  return (
    <div className='wiglet-container'>
      <div className='welcome-container'>
        <div className='invest-contain'>
        <h1>See how your investments are doing</h1>
        <p>Invest with us to earn daily rewards</p>
        </div>
      </div>

      <div className='investments_container'>
        <div className='invest-wing invests'>
          <div>
            <h6>Balance of Investments</h6>
            <h1>AFR 0.00</h1>
            <input type="" placeholder='NGN 0.00' disabled/>
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
              <hr className='hr one'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>22/09</h3>
              <hr className='hr two'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>23/09</h3>
              <hr className='hr three'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>24/09</h3>
              <hr className='hr four'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>25/09</h3>
              <hr className='hr five'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>26/09</h3>
              <hr className='hr six'/>
              <h4>AFR 0.00</h4>
            </div>

            <div className='future-plans'>
              <h3>27/09</h3>
              <hr className='hr seven'/>
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