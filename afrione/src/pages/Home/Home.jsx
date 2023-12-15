import React from 'react';
import './home.css'
import Dashboard from '../../components/Dashboard/Dashboard';
import Layout from '../../layout/layout';

const Home = () => {
  return (
    <Layout title="Dashboard">
      <Dashboard />
    </Layout>
  )
}

export default Home