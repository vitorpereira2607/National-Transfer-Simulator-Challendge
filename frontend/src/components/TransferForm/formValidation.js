import { isValidIBAN } from 'ibantools';

export const validateFormData = (formData) => {
    let errors = {};

    if (!formData.originAccount) errors.originAccount = 'Origin Account is required.';
    if (!formData.iban) errors.iban = 'IBAN is required.';
    if (!formData.description) errors.description = 'Description is required.';
    if (!formData.amount) errors.amount = 'Amount is required.';


    if (formData.originAccount && formData.originAccount.includes(' ')) errors.originAccount = 'Invalid Account number. It should not contain spaces.';
    if (formData.originAccount && formData.originAccount.length !== 12) errors.originAccount = 'Invalid Account number. It must contain exactly 12 digits.';
    if (formData.originAccount && !/^\d+$/.test(formData.originAccount)) errors.originAccount = 'Invalid Account number. It must contain only digits.';

    if (formData.amount && isNaN(formData.amount)) errors.amount = 'Amount must be a number.';
    if (formData.amount && formData.amount <= 0) errors.amount = 'Amount must be a positive number.';

    if (formData.iban && !isValidIBAN(formData.iban)) errors.iban = 'Invalid IBAN format';

    if (formData.description && formData.description.length > 254) errors.description = 'Description should not exceed maximum 254 characters';
    
    return errors;
};
