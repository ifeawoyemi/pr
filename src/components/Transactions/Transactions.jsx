import React from 'react';
import './transcation.css';
import Success from '../images/transacticonupDT.png';

const Transactions = () => {
  return (
    <div className='wiglet-container special'>
      <div className='welcome-container user-activities'>
        <div>
          <h1>Transactions</h1>
          <div>
            <button>Transfers</button>
            <button>Deposits</button>
            <button>Purchase</button>
          </div>
        </div>

      </div>

      <div className='transact-active'>
        <div className='history'>
          <div className='user-history'>
            <div className='icon-activities'>
              <img src={Success} alt="" />
              
                <h1>From John Doe</h1>
            </div>

            <div className='specially'>
              <h5>DV 0.00</h5>
              <h4>(NGN 0.00)</h4>
            </div>
            <div className='transfer'>
              <h5>Transfer</h5>
            </div>
            <div className='transfer-day'>
              <h5>12/09/2021</h5>
            </div>
            <div className='success'>
              <span>Success</span>
            </div>
          </div>

          <div className='user-history'>
            <div className='icon-activities'>
              <img src={Success} alt="" />
              
                <h1>From John Doe</h1>
            </div>

            <div className='specially'>
              <h5>DV 0.00</h5>
              <h4>(NGN 0.00)</h4>
            </div>
            <div className='transfer'>
              <h5>Transfer</h5>
            </div>
            <div className='transfer-day'>
              <h5>12/09/2021</h5>
            </div>
            <div className='success'>
              <span>Success</span>
            </div>
          </div>

          <div className='user-history'>
            <div className='icon-activities'>
              <img src={Success} alt="" />
              
                <h1>From John Doe</h1>
            </div>

            <div className='specially'>
              <h5>DV 0.00</h5>
              <h4>(NGN 0.00)</h4>
            </div>
            <div className='transfer'>
              <h5>Transfer</h5>
            </div>
            <div className='transfer-day'>
              <h5>12/09/2021</h5>
            </div>
            <div className='success'>
              <span>Success</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Transactions