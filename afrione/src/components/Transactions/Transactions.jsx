import React from 'react';
import './transcation.css'

const Transactions = () => {
  return (
    <div className='wiglet-container'>
      <div className='welcome-container activities'>
        <div>
          <h1>Transactions</h1>
          <div>
            <button>Transfers</button>
            <button>Deposits</button>
            <button>Purchase</button>
          </div>
        </div>

      </div>

      <div className='transactions-activities'>
        <div className='history'>
          <div className='user-history'>
            <div className='icontransact'>

            </div>
            <div>
              <h5>From</h5>
            </div>
            <div>
              <h5>Osazee Anco</h5>
            </div>
            <div className=''>
              <h5>AFR 0.00</h5>
              <h3>(NGN 0.00)</h3>
            </div>
            <div>
              <h5>Transfer</h5>
            </div>
            <div>
              <h5>12/09/2021</h5>
            </div>
            <div>
              <span>Success</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Transactions