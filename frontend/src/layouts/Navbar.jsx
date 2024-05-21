import React from 'react';
import { Nav, Title, Steps, Pages } from './styled';
import { useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    const step = location.pathname === '/' ? 'Step 1/2' : 'Step 2/2'
    const page = location.pathname === '/' ? 'Information' : 'Summary'
  return (
    <Nav>
      <div>
      <Title>National Transfer</Title>
      <Pages>{page}</Pages>
      </div>
      <Steps>{step}</Steps>
    </Nav>
  );
}

export default Navbar;
