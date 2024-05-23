import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom'

const drawerWidth = 290;

const DashboardLayout = ({ children }) => {
    const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#1F2937', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, backgroundColor: '#1F2937' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#fff' }}>
          <Box component="img" src="yourSite.png" alt="Your Site" sx={{ height: '39px', width: '246.46px', top: '17px', left: '44px' ,cursor:'pointer' }} onClick={()=>{navigate('/')}} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#27364a',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {['Project', 'CRM', 'Sales', 'Crypto', 'Knowledge Base', 'Account'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ color: '#fff' }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Welcome', 'Access Denied'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ color: '#fff' }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
