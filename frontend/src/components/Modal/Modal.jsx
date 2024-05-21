import React from 'react';
import { useNavigate } from 'react-router-dom'
import { RightPanel, CloseButton, PanelContent, OkButton } from './styled'; 
import axios from 'axios';

function Modal ({isOpen, onClose, amountUsd}) {
    if(!isOpen) return null;
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
    
  return (
    <RightPanel isOpen={isOpen}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <PanelContent>
        <h2>Transfer Summary</h2>
        <p>Amount in USD: {amountUsd}</p>
        <OkButton onClick={handleClick}>OK</OkButton>
      </PanelContent>
    </RightPanel>
    
  );
}

export default Modal;
