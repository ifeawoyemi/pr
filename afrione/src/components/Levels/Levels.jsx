import React from 'react'
import './levels.css'

const Levels = () => {
  return (
    <div className='levels'>
        <div>
        <div className='swap'>
          <div>
            <h1>Swap money globally</h1>
            <p>Invite your friends and get discount on transaction fees</p>
            <button>Get started</button>
          </div>
        </div>
        <div className='rewards'>
          <h1 className='h1'>Invest and earn rewards</h1>
          <p className='p'>Invite your friends and get discount on transaction fees</p>
          <button className='button'>Get Started</button>
        </div>
        <div className='referal'>
          <h1>Refer your friends and family</h1>
          <p>Invite your friends and get discount on transaction fees</p>
          <button>Get Link</button>
        </div>
        </div>
    </div>
  )
}

export default Levels