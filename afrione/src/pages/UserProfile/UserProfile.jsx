import React from 'react';
import './userprofile.css';
import Profile from '../../components/Profile/Profile';
import Layout from '../../layout/layout';

const UserProfile = () => {
  return (
    <Layout page="User Profile">
      <Profile />
    </Layout>
  )
}

export default UserProfile