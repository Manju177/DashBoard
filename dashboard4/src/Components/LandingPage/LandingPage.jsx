import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/system';

const AppBarStyled = styled(AppBar)({
  background: '#fff',
  color: '#000',
  boxShadow: '0 0 2px -1px'
});

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

// const Logo = styled(Typography)({
//   fontWeight: 'bold',
// });

const Section = styled(Box)({
  textAlign: 'center',
  backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/840a/d98c/a31a6973220aae2e4bf5f2ccefcd5514?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTWpG2GKFHTJ3OkxzrWzsbrT9MmIKC4CZMeM8brbXE9RLds~h9Bwb4Iqe2v7vaz8XzZejEOWNXWvC~Nj9HO8ENOTFg7pd37s5nmyGkSSt5ieRAv6N5qp4WxPl1~~u~tpmbtOHZrViy9W-yRmthu~CHDJTWaOzAXyEkJMmGYJ6rDmTJAAByrVO-EJeC3drWabALlGF4APxMSgzU11gxWQ~Adx68IWFJPAOxwHf17eA2tOkrj9XkU22J3-GZFI2njYGIhtmw78JDxqzoTmsWsTy4jnbTWpu40x6-DN4uDrhPFED9u5FrHVoUnBwnOwmu0xDeU-IXbfkdHbfjOtZMDh~w__)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '1180px',
  height: '100vh',
  gap: '0px',
  opacity: '0px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This will create the overlay effect
  }
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px',
});

const Content = styled(Container)({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  flexDirection: 'column'
});

const Subtitle = styled(Typography)({
  marginBottom: '40px',
});

const StartButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#FF4D00',
  color: '#FFF',
  borderRadius: '32px',
  padding: '10px 20px',
});

const CircleBox = styled(Box)({
  width: '50%',
  paddingTop: '50%',
  borderRadius: '50%',
  backgroundColor: '#0F1B31B2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  zIndex: 2,
  maxWidth: '400px',
  maxHeight: '400px',
  padding: '70px',
  textAlign: 'center',
  position: 'relative',
});

const BookMeetingBox = styled(Box)({
  
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ff5722',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  top: '-20px',
  right: '-20px',
});

const LandingPage = () => {
  return (
    <>
      <AppBarStyled position="static" elevation={0}>
        <ToolbarStyled>
          <Box component="img" src="yourSite.png" alt="Your Site" sx={{ height: '39px', width: '246.46px', top: '17px', left: '44px' }} />
          <div >
            <Button color="inherit" style={{fontWeight: 'bold',}}>About</Button>
            <Button color="inherit" style={{fontWeight: 'bold',}}>How it works</Button>
            <Button color="inherit" style={{fontWeight: 'bold',}}>Pricing</Button>
          </div>
          <div>
            <Button variant="contained" sx={{ backgroundColor: '#FF4D00', color: '#FFF', borderRadius: '32px' }}>
              Login/Signup
            </Button>
          </div>
        </ToolbarStyled>
      </AppBarStyled>
      <Section>
        <Content maxWidth="lg">
          <CircleBox>
          <Box component="img" src="./robo.png" alt="video Site" style={{ height: '192px', width: '128.59px', }} />
            <Title variant="h3">Automate your pre-sales</Title>
            <Subtitle variant="subtitle1"><span style={{color:'#FF5E00'}}>Recently received</span> <span style={{color:'#FF5E00',textDecoration:'underLine',cursor:'pointer'}}>$2 million</span> in seed funding.</Subtitle>
            <StartButton variant="contained" size="large">
              Start the Conversation
            </StartButton>
            <BookMeetingBox >
            <Box component="img" src="./video.png" alt="video Site" style={{ height: '15px', width: '20.46px', }} />
              <Typography style={{fontSize:'0.85rem',}} variant="h6">Book a 30</Typography>
              <Typography style={{fontSize:'0.85rem',}} variant="h6">minutes meeting</Typography>
              <Typography style={{fontSize:'0.85rem',}} variant="h6">with us</Typography>
            </BookMeetingBox>
          </CircleBox>
        </Content>
      </Section>
    </>
  );
}

export default LandingPage;
