import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ServicePlan } from '../cardData/ServicePlan';

const theme = createTheme();

export const ServicePlanList = () => {
    const [servicePlans, setServicePlans] = useState([]);
    const [servicePlanUpdated, setServicePlanUpdated] = useState(false);

    // get all service plans
    // if a service plan is updated, refresh, and reset state 
    useEffect(() => {
        axios.get(`http://localhost:8090/plan`)
            .then(response => setServicePlans(response.data));

        return () => {
            setServicePlanUpdated(false)
        }
    }, [servicePlanUpdated]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={4}>

                        {/* map all service plans to a card */}
                        {servicePlans.map((card) => {
                            return (
                                <Grid item key={card.id} xs={12} sm={6} md={3}>
                                    <ServicePlan card={card} setServicePlanUpdated={setServicePlanUpdated} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}