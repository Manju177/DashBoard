import React from 'react';
import Header from './Header.jsx'
import MainContent from './MainContain.jsx'
import Footer from './Footer.jsx';
import { Container } from '@mui/material';

function SalesAgent() {
  return (
    <Container maxWidth="lg">
   
      <MainContent />
      {/* <Footer /> */}
    </Container>
  );
}

export default SalesAgent;
