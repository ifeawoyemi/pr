import React from 'react';
import './home.css'
import Dashboard from '../../components/Dashboard/Dashboard';
import Layout from '../../layout/layout';
// import Purse from '../../components/Purse/Purse';

const Home = () => {
  return (
    <Layout page="Dashboard">
      <Dashboard />
    </Layout>
  )
}

export default Home