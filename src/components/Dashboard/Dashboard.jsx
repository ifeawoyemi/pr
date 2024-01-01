import React, { useEffect, useState } from 'react'
import './dashboard.css';
import Chevron from '../icons/Chevron'
import Transact from '../Transact/Transact';
import Levels from '../Levels/Levels';
import X from '../images/x.png';
import Educate from '../images/Graduation Cap.png';
import Health from '../images/Atom.png';
import SchoolBag from '../images/School Bag.png';
import TableGlobe from '../images/Table Globe.png';
import School from '../images/School.png';
import Medal from '../images/Medal.png';
import Arrow from '../../components/icons/Arrow';

const Dashboard = () => {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sectionStack, setSectionStack] = useState([]);

  const handleInvestClick = () => {
    setIsInvestModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInvestModalOpen(false);
    setSelectedSection(null);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleArrowClick = () => {
    const prevSection = sectionStack.pop();
    setSelectedSection(prevSection);
    setSectionStack([...sectionStack]);
  };

  const [username, setUsername] = useState("")

  useEffect(() => {
    
   
    let users_data = JSON.parse(localStorage.getItem("user_db"));
    let user_email = JSON.parse(localStorage.getItem("current_email"));

    const hg = users_data.find(user => user.email === user_email);

    console.log("This is the original: ", hg);
    setUsername(hg.firstName)

  }, [])


  return (
    <div className='wiglet-container'>
      <div className='welcome-container'>
        <h1>Welcome {username}</h1>
        <p>Earn daily reward points by making an investment with us.</p>
      </div>

      <div>
        <div className='wing'>
          <div className='balance-wing'>
            <div>
              <h3>Balance</h3>
              <h1>DV 0.00</h1>
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
              <h6>Balance of Investments</h6>
              <h1>DV 0.00</h1>
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

      {isInvestModalOpen && !selectedSection && (
        <div className='overlay'>
          <div className='modal'>
            <div>
              <img src={X} alt="Close" onClick={handleCloseModal} />
            </div>
            <h1 className='invest_h1'>What do you see fit to invest in?</h1>

            <div className='investment'>
              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={Educate} alt="" />
                <h3>Education Sector</h3>
              </div>

              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={Health} alt="" />
                <h3>Health Sector</h3>
              </div>

              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={School} alt="" />
                <h3>Real Estate</h3>
              </div>

              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={TableGlobe} alt="" />
                <h3>Tourism</h3>
              </div>

              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={SchoolBag} alt="" />
                <h3>Technology</h3>
              </div>

              <div className='education' onClick={() => handleSectionClick('commonSection')}>
                <img src={Medal} alt="" />
                <h3>Event Planning</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {isInvestModalOpen && selectedSection && (
        <div>
          {selectedSection === 'commonSection' &&
            <div className="overlay">
              <div className="modal">
                <div onClick={handleArrowClick} >
                  <Arrow />
                </div>

                <div className='invest-duration'>
                  <h1>Select Duration</h1>
                  <p>Select a timeframe for your Investment and get more profit that you want to invest your funds and earn interests upto 15%.</p>
                </div>

                <div className='durations'>
                  <div className='duration' onClick={() => handleSectionClick('commonSection')}>
                    <h1>3 months</h1>
                    <div className='percent'>6% guaranteed</div>
                  </div>

                  <div className='duration' onClick={() => handleSectionClick('commonSection')}>
                    <h1>6 months</h1>
                    <div className='percent'>8% guaranteed</div>
                  </div>

                  <div className='duration' onClick={() => handleSectionClick('commonSection')}>
                    <h1>9 months</h1>
                    <div className='percent'>13% guaranteed</div>
                  </div>

                  <div className='duration' onClick={() => handleSectionClick('commonSection')}>
                    <h1>1 Year</h1>
                    <div className='percent'>15% guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}

      {isInvestModalOpen && selectedSection &&(
        <div>
          { selectedSection === 'addSection' &&
            <div className='overlay'>
            <div className='modal'>
              <div className='duration' onClick={() => handleSectionClick('addSection')}>
                    <h1>add</h1>
                    <div className='percent'>15% guaranteed</div>
                  </div>
            </div>
          </div>
          }
        </div>
      )
      }


    </div>
  )
}

export default Dashboard