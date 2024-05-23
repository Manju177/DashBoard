// components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{margin:'auto'}}>
        {/* <Box component="img" src="your-logo.png" alt="Your Site" sx={{ height: 40, flexGrow: 1 }} /> */}
        <Button variant="contained" sx={{ backgroundColor: '#FF4D00', color: '#FFF' }}>
          Visit Our Website
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#FF4D00', color: '#FFF', ml: 2 }}>
          Book A Meeting
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
