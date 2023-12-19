import React, { useState } from 'react';
import './userpurse.css';
import Chevron from '../icons/Chevron';
import Buy from '../images/Buy.png';
import Receive from '../images/Receive.png';
import Send from '../images/Send.png';
import Transact from '../Transact/Transact';
import X from '../images/x.png'

const UserPurse = () => {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const openModal = (modalType) => {
    setSelectedSection(null); 
    switch (modalType) {
      case 'buy':
        setIsBuyModalOpen(true);
        break;
      case 'send':
        setIsSendModalOpen(true);
        break;
      case 'receive':
        setIsReceiveModalOpen(true);
        break;
      default:
        setIsInvestModalOpen(true);
        break;
    }
  };

  const closeModal = () => {
    setIsInvestModalOpen(false);
    setIsBuyModalOpen(false);
    setIsSendModalOpen(false);
    setIsReceiveModalOpen(false);
    setSelectedSection(null);
  };

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className='wiglet-container'>
       <div className='welcome-container purse'>
         <div>
           <h1>My Purse</h1>
           <p>Earn daily reward points by making an investment with us.</p>
         </div>
         <div>
           <button> Invest</button>
         </div>
       </div>

       <div className='purse-container'>
         <div className='purse-wing'>
           <h3>Balance</h3>
           <h1>DV 0.00</h1>
           <div className='input-container'>
             <input type='' placeholder='NGN 0.00' />
             <div className='img-container'>
               <Chevron />
             </div>
           </div>
         </div>

         <div className='coin-details'>
        <div className='coin' onClick={() => openModal('buy')}>
          <img src={Buy} alt="" />
          <h5>Buy</h5>
        </div>
        <div className='coin' onClick={() => openModal('send')}>
          <img src={Send} alt="" />
          <h5>Send</h5>
        </div>
        <div className='coin' onClick={() => openModal('receive')}>
          <img src={Receive} alt="" />
          <h5>Receive</h5>
        </div>
      </div>
       </div>

       <div className='lower-wing'>
         <div>
           <Transact />
         </div>
         <div className='levels'>
           <div>
             <div className='swap'>
               <div>
                   <h1>Swap money globally</h1>
                 <p>Invite your friends and get discount on transaction fees</p>                 <button>Get started</button>
               </div>
             </div>
             <div className='rewards'>
               <h1 className='h1'>Invest and earn rewards</h1>
               <p className='p'>Invite your friends and get discount on transaction fees</p>
               <button className='button'>Get Started</button>
             </div>
           </div>
         </div>
       </div>

      {isBuyModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <div onClick={closeModal}>
            <div>
              <img src={X} alt="Close" />
            </div>
            </div>
            <h1></h1>
          </div>
        </div>
      )}

      {isSendModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <div onClick={closeModal}>
            <img src={X} alt="Close" />
            </div>
{/*             
            <div className='invest-duration'>
            <h1>Send money</h1>
            <p>You have to fund your wallet first before sending money to your loved ones</p>
            </div> */}
          </div>
        </div>
      )}

      {isReceiveModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <div onClick={closeModal}>
            <img src={X} alt="Close" />
            </div>
            <h1>Receive Modal Content</h1>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserPurse;