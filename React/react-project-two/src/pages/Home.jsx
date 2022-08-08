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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright, Pricing } from '../components';
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// https://github.com/mui/material-ui/tree/v5.9.3/docs/data/material/getting-started/templates/album

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createTheme();

export const Home = (props) => {
  const [profile, setProfile] = useState([]);
  const [servicePlanUpdated, setExpenseUpdated] = useState(false);
  const [statusUpdated, setStatusUpdated] = useState(false);
  const [intervaleUpdated, setIntervaleUpdated] = useState(false);
  const data = useLocation();

  // useEffect(() => {
  //   // axios.get(`http://localhost:8090/profiles/${props.id}`)
  //   axios.get(`http://localhost:8090/profiles/1`)
  //     .then(response => setProfile(response.data));
  // }, []);

  return (
    <>

      {/* <h1>
        DATA
        {console.log("DATA", data.state.id)}
      </h1> */}

      <div className='App'>
        <NavBar />
        <Pricing />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <Container sx={{ py: 8 }} maxWidth="md">
              {/* End hero unit */}
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
                        <Button size="small">Add to cart</Button>
                        <Button size="small">Quick Order</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
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
      </div>
    </>
  );
}
