import styled from 'styled-components';

export const RightPanel = styled.div`
  position: absolute;
  width: 40%;
  top: 23vh;
  right: 5vw;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 4px;
  border: 2px solid #009fff;
  transition: transform 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  
`;

export const OkButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 0 4px;
  background: #009fff;
  color: white;
`

export const PanelContent = styled.div`
  margin-top: 20px; 
`;
