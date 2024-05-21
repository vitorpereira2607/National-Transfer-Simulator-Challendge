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

export const FormText = styled.p`
  width: 300px;
  
  font-size: 16px;
  color: black;
`;

export const FormButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 6%;
    text-align: center;
    margin: 4px 2px;
    cursor: pointer;
    position: fixed;
    bottom: 5%;
    background: #009fff;
    color: white;
    left: 21%;
  &:hover {
    border: 2px solid #ccc;
  }
`;

export const BackButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 6%;
  text-align: center;
  margin: 4px 2px;
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  background: #ffff;
  color: Black;
  
  &:hover {
    border: 2px solid #ccc;
  }
`;
