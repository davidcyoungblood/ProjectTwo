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
import { useState, useEffect } from 'react';
import axios from 'axios';

const theme = createTheme();

export const StatusList = () => {
    const [statuses, setStatuses] = useState([]);

    // get all statuses
    useEffect(() => {
        axios.get(`http://localhost:8090/status`)
            .then(response => setStatuses(response.data));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>

                        {/* map all statuses to a card */}
                        {statuses.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random/405"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Status •
                                            {card.id}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {card.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            leo integer malesuada nunc vel risus commodo viverra
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
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