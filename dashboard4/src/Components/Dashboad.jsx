import React from 'react';
import {
  CssBaseline,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
  Paper,
  CircularProgress,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const drawerWidth = 290; 
const data = {
  labels: ['21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan'],
  datasets: [
    {
      label: 'New Leads',
      data: [40, 50, 60, 70, 60, 50, 40],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Proposals',
      data: [60, 70, 80, 90, 80, 70, 60],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#fff', 
      },
    },
    title: {
      display: true,
      text: 'Leads and Proposals Over Time',
      color: '#fff', 
    },
  },
  scales: {
    x: {
      grid: {
        color: '#455A64', // X-axis grid color
      },
    },
    y: {
      grid: {
        color: '#455A64', // Y-axis grid color
      },
    },
  },
};

// random data fix later
const createData = () => {
  const rows = [];
  for (let i = 1; i <= 5; i++) {
    rows.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
    });
  }
  return rows;
};

const Dashboard = () => {
  const rows = createData();

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#1F2937', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, backgroundColor: '#1F2937' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#fff' }}>
            Your Site
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
      <Box style={{width:'100rem'}} component="main"  sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">63 New Leads</Typography>
              <Typography variant="body2" color="textSecondary">+2% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">25 Email</Typography>
              <Typography variant="body2" color="textSecondary">+5.5% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">49 Proposals</Typography>
              <Typography variant="body2" color="textSecondary">-0.7% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">12 Appointment</Typography>
              <Typography variant="body2" color="textSecondary">+2.6% this month</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">Leads</Typography>
              <Bar data={data} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#455A64' }}>
              <Typography variant="h6" color="textPrimary">Email Sent</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={73} size={100} />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption" component="div" color="textSecondary">
                    73%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="textSecondary">Performance: Average</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }} >
          <Paper sx={{ p: 2, bgcolor: '#455A64' }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Random Data Table
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Email</TableCell>
                    <TableCell sx={{ color: '#fff' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell sx={{ color: '#fff' }}>{row.id}</TableCell>
                      <TableCell sx={{ color: '#fff' }}>{row.name}</TableCell>
                      <TableCell sx={{ color: '#fff' }}>{row.email}</TableCell>
                      <TableCell sx={{ color: '#fff' }}>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
