import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {FormBox, FormGroup, FormLabel, FormText, FormButton, BackButton} from './styled'; 
import Modal from '../Modal/Modal';
import axios from 'axios';

function TransferSummary() {

    const navigate = useNavigate();

    const location = useLocation();
    const { formData } = location.state || {};

    const [amountUsd, setAmountUsd] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://127.0.0.1:8000/national-transfer/', formData);
          
          if (response.status === 201) {
            let amount = response.data.amount_usd
            setAmountUsd(amount.toFixed(2))
            setIsModalOpen(true)
          }
      } catch (e) {
          console.error('Error:', e);
      }
     
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleCLick = () => {
    navigate('/');
  }
  
  return (
<FormBox>
      <form >
        <FormGroup>
          <FormLabel>Origin Account:</FormLabel>
          <FormText>{ formData ? formData.originAccount : '' }</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>IBAN:</FormLabel>
          <FormText>{ formData ? formData.iban : ''}</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Transfer Description:</FormLabel>
          <FormText>{ formData ? formData.description : ''}</FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Amount:</FormLabel>
          <FormText>{ formData ? formData.amount : ''}</FormText>
        </FormGroup>
        <BackButton onClick={handleCLick}>Back</BackButton>
        <FormButton onClick={handleSubmit}>Confirm</FormButton>
        
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} amountUsd={amountUsd} />
      </form>
    </FormBox>  
  );
}

export default TransferSummary;
