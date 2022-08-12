import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Status } from './Status';

const theme = createTheme();

export const StatusList = () => {
    const [statuses, setStatuses] = useState([]);
    const [statusUpdated, setStatusUpdated] = useState(false);

    // get all statuses
    // if a status is updated, refresh, and reset state 
    useEffect(() => {
        axios.get(`http://localhost:8090/status`)
            .then(response => setStatuses(response.data));

        return () => {
            setStatusUpdated(false)
        }
    }, [statusUpdated]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>

                        {/* map all statuses to a card */}
                        {statuses.map((card) => {
                            return (
                                <Grid item key={card.id} xs={12} sm={6} md={3}>
                                    <Status card={card} setStatusUpdated={setStatusUpdated} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}