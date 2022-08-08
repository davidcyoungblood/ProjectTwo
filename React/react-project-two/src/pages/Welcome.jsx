import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardContainer, Copyright, ServicePlan } from '../components';
import { ThunderstormIcon } from '../components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// https://github.com/mui/material-ui/tree/v5.9.3/docs/data/material/getting-started/templates/album

export const Welcome = () => {
  const theme = createTheme();

  const cardSet1 = [1, 2, 3, 4];
  const cardSet2 = [1, 2, 3, 4];
  const cardSet3 = [1, 2, 3, 4];

  const [servicePlans, setServicePlans] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8090/plan`)
      .then(response => setServicePlans(response.data));

    axios.get(`http://localhost:8090/status`)
      .then(response => setStatuses(response.data));

    axios.get(`http://localhost:8090/interval`)
      .then(response => setIntervals(response.data));
  }, []);


  return (
    <>
      <h1>

        {servicePlans.map((servicePlan) => {
          return (
            <ServicePlan
              key={servicePlan.id}
              servicePlan={servicePlan}
            />
          );
        })}

      </h1>
      {/* <h1>{statuses}</h1> */}
      {/* <h1>{intervals}</h1> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ThunderstormIcon />
            <Typography variant="h6" color="inherit" noWrap>
              StormCloud
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Get Started
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained"><Link style={{ color: 'white', textDecoration: 'none' }} to='/signup'>Sign Up</Link></Button>
                <Button variant="outlined"><Link style={{ color: 'black', textDecoration: 'none' }} to='/signin'>Sign In</Link></Button>
              </Stack>
            </Container>
          </Box>

          <CardContainer image="https://source.unsplash.com/random/400" cards={cardSet1} heading={"Service plans"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
          <CardContainer image="https://source.unsplash.com/random/405" cards={cardSet2} heading={"Statuses"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit et dolore magna aliqua. Malesuada fames ac turpis egestas sed."} />
          <CardContainer image="https://source.unsplash.com/random/410" cards={cardSet3} heading={"Intervals"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempt labore et dolore magna sed."} />

        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            eget est lorem ipsum dolor sit amet consectetur adipiscing elit        </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}