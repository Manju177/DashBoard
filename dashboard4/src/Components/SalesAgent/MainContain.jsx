import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import Header from './Header';

function MainContent() {
  return (
    <Box textAlign="center" my={5} position="relative" sx={{ height: '100vh' }}>
      {/* Main Heading */}
       <Box component="img" src="yourSite.png" alt="Your Site" sx={{ height: 40, flexGrow: 1 }} />
      <Typography
        component="h1"
        sx={{
          fontFamily: 'Mulish, sans-serif',
          fontSize: '64px',
          fontWeight: 800,
          lineHeight: '85.76px',
          textAlign: 'center',
          marginTop: '40px'
        }}
      >
        Get 2x Revenue With <span style={{ color: '#FF4D00' }}>Gen A.I. Powered Sales Agent</span> To Your Customers
      </Typography>

      {/* Sub Heading */}
      <Typography
        sx={{
          fontFamily: 'Mulish, sans-serif',
          fontWeight: 800,
          fontSize: '24px',
          textAlign: 'center',
          marginTop: '20px'
        }}
        variant="h5"
        component="p"
      >
        Connect with 10,000 customers in 1 hour with real-time data insights, revolutionizing business outreach with AI-human synergy.
      </Typography>
      <Header />

      <Box sx={{ position: 'relative', mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Sales Text */}
        <Typography
          component="div"
          sx={{
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'Mulish, sans-serif',
            fontSize: '167.47px',
            fontWeight: 800,
            lineHeight: '224.41px',
            textAlign: 'left',
            background: 'linear-gradient(90deg, #FF4D00 0%, #FFA06B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.9,
            zIndex: 0,
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
        >
          Sales
        </Typography>

        {/* Form Card with Border Image */}
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            zIndex: 1,
            padding: '20px',
            width: '395px',
            height: '773px',
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/layout.png)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              zIndex: -1,
            },
          }}
        >
          <Card sx={{ boxShadow: 'none', background: 'transparent' }}>
            <CardContent>
              <Box sx={{ textAlign: 'center' }}>
                <img src="/bot.png" alt="AI Voicebot" style={{ height: '100px', marginBottom: '20px' }} />
              </Box>
              <Typography variant="h6" component="div" sx={{ marginBottom: '20px', fontWeight:800,fontFamily: 'Mulish, sans-serif', }}>
                Talk to our voice bot
              </Typography>
              <img src="/freqency.png" alt="AI Voicebot" style={{ height: '20px', marginBottom: '-20px' }} />
              <form noValidate autoComplete="off" style={{padding:'50px'}}>
                <TextField
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  sx={{
                    width: '269px',
                    height: '44px',
                    mx: 'auto',
                    display: 'block',
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  sx={{
                    width: '269px',
                    height: '44px',
                    mx: 'auto',
                    display: 'block',
                  }}
                />
                <TextField
                  label="Phone"
                  type="tel"
                  fullWidth
                  margin="normal"
                  sx={{
                    width: '269px',
                    height: '44px',
                    mx: 'auto',
                    display: 'block',
                  }}
                />
                <br/>
                <Button
                  variant="contained"
                  sx={{
                    background: '#FF4D00',
                    width: '217px',
                    height: '44px',
                    mx: 'auto',
                    display: 'block',
                    mt: 2,
                    borderRadius: '7px 0px 0px 0px',
                    border: '1px solid transparent',
                  }}
                >
                  Request A Call Back
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>

        {/* Agent Text */}
        <Typography
  component="div"
  sx={{
    position: 'absolute',
    right: '-100px', // Adjust this value as needed for proper alignment
    top: '50%',
    transform: 'translateY(-50%)',
    fontFamily: 'Mulish, sans-serif',
    fontSize: '167.47px',
    fontWeight: 800,
    lineHeight: '224.41px',
    textAlign: 'right',
    background: 'linear-gradient(90deg, #FF4D00 0%, #FFA06B 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.9,
    zIndex: 0,
    whiteSpace: 'nowrap',
    pointerEvents: 'none'
  }}
>
  Agent
</Typography>

      </Box>
    </Box>
  );
}

export default MainContent;
