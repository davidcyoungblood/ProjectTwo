import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Interval } from '../cardData/Interval';

const theme = createTheme();

export const IntervalList = () => {
    const [intervals, setIntervals] = useState([]);
    const [intervalUpdated, setIntervalUpdated] = useState(false);

    // get all intervals
    // if a interval is updated, refresh, and reset state
    useEffect(() => {
        axios.get(`http://localhost:8090/interval`)
            .then(response => setIntervals(response.data));

        return () => {
            setIntervalUpdated(false)
        }
    }, [intervalUpdated]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {/* map all intervals to a card */}
                        {intervals.map((card) => {
                            return (
                                <Grid item key={card.id} xs={12} sm={6} md={3}>
                                    <Interval card={card} setIntervalUpdated={setIntervalUpdated} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}