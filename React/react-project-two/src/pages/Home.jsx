import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright, Footer, Pricing, ServicePlanList } from '../components';
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Profile } from '../components/Profile';
import {Plans, Statuses, Intervals} from '../components/homeData'

// https://github.com/mui/material-ui/tree/v5.9.3/docs/data/material/getting-started/templates/album

const cards = [1, 2, 3, 4];

const theme = createTheme();

export const Home = (props) => {
  // const [profile, setProfile] = useState([]);
  // const [servicePlanUpdated, setExpenseUpdated] = useState(false);
  // const [statusUpdated, setStatusUpdated] = useState(false);
  // const [intervaleUpdated, setIntervaleUpdated] = useState(false);
  
  //EDIT switching between view account and home the data location is cleared
  const string = sessionStorage.getItem("loggedIn");
  const data = JSON.parse(string);
  //const data = useLocation();

  // useEffect(() => {
  //   // axios.get(`http://localhost:8090/profiles/${data.state.id}`)
  //   //   .then(response => setProfile(response.data));
  //   setProfile(data.state);
  //   console.log(profile);

  //   return () => {
  //     setProfile(null);
  //   }

  // }, []);

  return (
    <div className='App'>
      {console.log(data)}
      {console.log(data.servicePlanId)}
      {console.log(data.statusId)}
      {console.log(data.intervalId)}
      <NavBar />
      <Plans />
      <Statuses/>
      <Intervals/> 
      {/* <Pricing /> */}
      {/* <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Profile key={data.id} profile={data} servicePlan={data.servicePlanId} status={data.statusId} interval={data.intervalId} />
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Service
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Switch To</Button>
                      {/* <Button size="small">Quick Order</Button> 
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Footer />
      </ThemeProvider> */}
    </div>
  );
}
