import React from 'react'
import './dashboard.css';
import Chevron from '../icons/Chevron'
import Transact from '../Transact/Transact';

const Dashboard = () => {
  return (
    <div className='wiglet-container'>
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
                          <input type='' placeholder='NGN 0.00'/>
                            <div className='img-container'>
                              <Chevron/>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button>Invest</button>
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
                    <Transact/>
                  </div>
                  <div>
                    Layout
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Dashboard