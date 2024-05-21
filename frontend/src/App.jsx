import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TransferForm from './components/TransferForm/TransferForm';
import TransferSummary from './components/TransferSummary/TransferSummary';
import Navbar from './layouts/Navbar';
import { OkButton } from './components/Modal/styled';
import { BackButton } from './components/TransferSummary/styled';

const App = () => {
  const [transferData, setTransferData] = useState(null);

  const handleTransferFormSubmit = (data) => {
    setTransferData(data);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TransferForm onSubmit={handleTransferFormSubmit} />} />
        <Route
          path="/summary"
          element={transferData ? <TransferSummary transferData={transferData} /> : <Navigate to="/" />}
        />
        <Route path='/' element={<TransferForm />} />
      </Routes>
    </>
  );
};

export default App;
