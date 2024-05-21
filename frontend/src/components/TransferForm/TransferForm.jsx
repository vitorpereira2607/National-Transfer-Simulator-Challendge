import React, { useState } from 'react';
import { FormBox, FormGroup, FormLabel, FormInput, FormButton, FormTextarea, ErrorMessage } from './styled';
import { useNavigate } from 'react-router-dom';
import { validateFormData } from './formValidation';

function TransferForm({ onSubmit }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    originAccount: '',
    iban: '',
    description: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    onSubmit(formData)
      navigate('/summary', { state: { formData } });
    }
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Origin Account:</FormLabel>
          <FormInput
            type="text"
            name="originAccount"
            value={formData.originAccount}
            onChange={handleChange}
          />
          {errors.originAccount && <ErrorMessage>{errors.originAccount}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <FormLabel>IBAN:</FormLabel>
          <FormInput 
          type="text" 
          name="iban" 
          value={formData.iban} 
          onChange={handleChange} 
          />
          {errors.iban && <ErrorMessage>{errors.iban}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Transfer Description:</FormLabel>
          <FormTextarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Amount:</FormLabel>
          <FormInput 
          type="text" 
          name="amount" 
          value={formData.amount} 
          onChange={handleChange} 
          />
          {errors.amount && <ErrorMessage>{errors.amount}</ErrorMessage>}
        </FormGroup>
        <FormButton>Next Step</FormButton>
      </form>
    </FormBox>
  );
}

export default TransferForm;
