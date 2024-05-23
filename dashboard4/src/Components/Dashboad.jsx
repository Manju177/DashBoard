import React from 'react';
import { Grid, Paper, Typography, Box, CircularProgress, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import DashboardLayout from './DashBoardLayout';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        color: '#455A64',
      },
      ticks: {
        color: '#fff', // X-axis label color
      },
    },
    y: {
      grid: {
        color: '#455A64',
      },
      ticks: {
        color: '#fff', // Y-axis label color
      },
    },
  },
};

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

const paperStyle = {
  p: 2,
  textAlign: 'center',
  bgcolor: 'transparent',
  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1)', // Light white border
  border: '1px solid rgba(255, 255, 255, 0.3)', // Light white border
};

const transparentBackground = {
  bgcolor: 'transparent',
  boxShadow: 'none',
};

const Dashboard = () => {
  const rows = createData();

  return (
    <DashboardLayout>
      <Typography variant="h3" gutterBottom color="textPrimary">
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Typography variant="h6" style={{ color: 'white' }}>63 New Leads</Typography>
              <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>+2% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Typography variant="h6" style={{ color: 'white' }}>25 Email</Typography>
              <Typography variant="body2" style={{ color: 'white' }}>+5.5% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Typography variant="h6" style={{ color: 'white' }}>49 Proposals</Typography>
              <Typography variant="body2" style={{ color: 'white' }}>-0.7% this month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Typography variant="h6" style={{ color: 'white' }}>12 Appointment</Typography>
              <Typography variant="body2" style={{ color: 'white' }}>+2.6% this month</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Bar data={data} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ ...paperStyle, ...transparentBackground }}>
              <Typography variant="h6" style={{ color: 'white' }}>Email Sent</Typography>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={73} size={100} sx={{ color: 'rgb(85, 239, 196)' }} />
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
                  <Typography variant="caption" component="div" color="textSecondary" style={{color:'white'}}>
                    73%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="textSecondary" style={{color:'white'}}>Performance: Average</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Paper sx={{ ...paperStyle, ...transparentBackground }}>
            <Typography variant="h6" style={{ color: 'white' }} gutterBottom>
              Leads
            </Typography>
            <TableContainer sx={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}> {/* Light white border */}
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
      </Typography>
    </DashboardLayout>
  );
};

export default Dashboard;
