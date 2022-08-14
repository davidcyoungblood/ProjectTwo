import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const theme = createTheme();

export const Plans = () => {
    const [servicePlans, setServicePlans] = useState([]);

    // get all service plans
    useEffect(() => {
        axios.get(`http://localhost:8090/plan`)
            .then(response => setServicePlans(response.data));
    }, []);
  
    const handleUpdate = (card) => {
        const string = sessionStorage.getItem("loggedIn");

        const profile = JSON.parse(string);


        profile.servicePlanId = card; 

        //update start date
        var today = new Date()

        var date =  (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() ;



        profile.startDate = date;

        
        try {
            axios.put(
             `http://localhost:8090/profiles/${profile.id}`, profile
           ) 
           sessionStorage.removeItem("loggedIn")
   
           sessionStorage.setItem("loggedIn", JSON.stringify(profile));
         } catch (error) {
           console.log(error)
         }
          
      };
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={4}>
                        
                        {/* map all service plans to a card */}
                        {servicePlans.map((card) => (
                            
                            <Grid item key={card.id} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random/400"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Service Plan •
                                            {card.id}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {card.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {card.price}
                                        </Typography>
                                        <Typography variant="body2">
                                            sapien nec sagittis aliquam malesuada bibendum arcu vitae.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick = {async() =>handleUpdate(card)}>Update Plan</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}