import React from 'react';
import './transaction.css';
import Layout from '../../layout/layout';
import Transactions from '../../components/Transactions/Transactions';

const Transaction = () => {
  return (
    <Layout page="Transaction">
      <Transactions />
    </Layout>
  )

}

export default Transaction