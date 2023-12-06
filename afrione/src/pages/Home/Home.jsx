import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header';
import './home.css'
import Dashboard from '../../components/Dashboard/Dashboard';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='header'>
        <div className='head-container'>
          <Header />
        </div>
        <div className='Dash-container'>
          <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default Home