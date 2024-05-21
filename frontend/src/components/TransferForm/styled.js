import styled from 'styled-components';

export const FormBox = styled.div`
  padding: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const FormTextarea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const FormButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 56px;
  text-align: center;
  margin: 4px 2px;
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  background: #009fff;
  color: white;

  &:hover {
    border: 2px solid #ccc;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
