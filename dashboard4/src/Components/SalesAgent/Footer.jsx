import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box mt={5} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Your Site. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
