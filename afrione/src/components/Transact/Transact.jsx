import React from 'react'
import './transact.css'

const Transact = () => {
    return (
        <div className='transactions'>
            <div className='money'>
                <div className='recent'>
                    <h5>Recent Transactions</h5>
                    <button>View All</button>
                </div>

                <div>
                    <div className='recent-transactions'>
                        <div className='icontransact'>

                        </div>
                        <div className='transact-user'>
                            <h5>Osazee Anco</h5>
                            <div className='transact-date'>
                                <span className='sent'>Sent</span>
                                <span className='ball'></span>
                                <span className='date'>12/09/2021</span>
                            </div>
                        </div>
                        <div className='transact-money'>
                            <div>
                                <h2>AFR 0.00</h2>
                                <h6>NGN 0.00</h6>
                            </div>
                        </div>
                    </div>


                    <div className='recent-transactions'>
                        <div className='icontransact'>

                        </div>
                        <div className='transact-user'>
                            <h5>Osazee Anco</h5>
                            <div className='transact-date'>
                                <span className='sent'>Sent</span>
                                <span className='ball'></span>
                                <span className='date'>12/09/2021</span>
                            </div>
                        </div>
                        <div className='transact-money'>
                            <div>
                                <h2>AFR 0.00</h2>
                                <h6>NGN 0.00</h6>
                            </div>
                        </div>
                    </div>

                    <div className='recent-transactions'>
                        <div className='icontransact'>

                        </div>
                        <div className='transact-user'>
                            <h5>Osazee Anco</h5>
                            <div className='transact-date'>
                                <span className='sent'>Sent</span>
                                <span className='ball'></span>
                                <span className='date'>12/09/2021</span>
                            </div>
                        </div>
                        <div className='transact-money'>
                            <div>
                                <h2>AFR 0.00</h2>
                                <h6>NGN 0.00</h6>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Transact