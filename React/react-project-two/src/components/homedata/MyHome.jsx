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

export const MyHome = () => {
    const [servicePlans, setServicePlans] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [intervals, setIntervals] = useState([]);
    const [updatedPlan, setUpdatedPlan] = useState(false);
    const [startBilling, setStartBilling] = useState(false);

    const string = sessionStorage.getItem("loggedIn");
    const profile = JSON.parse(string);

    // get all service plans
    useEffect(() => {

        axios.get(`http://localhost:8090/plan`)
            .then(response => setServicePlans(response.data));

        axios.get(`http://localhost:8090/status`)
            .then(response => setStatuses(response.data));

        axios.get(`http://localhost:8090/interval`)
            .then(response => setIntervals(response.data));

        return (

            setUpdatedPlan(false)

        );
    }, [updatedPlan]);

    const handleServicePlanUpdate = (card) => {
        profile.servicePlanId = card;
        // console.log(statuses[0]);

        // setting statuses and intervals according to service plan card id
        if (card.id === 1) {
            profile.statusId = statuses[0];
            profile.intervalId = intervals[0];
        }
        if (card.id === 2 || card.id === 3 || card.id === 4) {
            profile.statusId = statuses[1];
            if (startBilling === false) {
                profile.intervalId = intervals[1];
                setStartBilling(true);
            }
        }
        
        var today = new Date()
        var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        profile.startDate = date;

        try {
            axios.put(
                `http://localhost:8090/profiles/${profile.id}`, profile
            )
            sessionStorage.removeItem("loggedIn")

            sessionStorage.setItem("loggedIn", JSON.stringify(profile));

            setUpdatedPlan(true);

        } catch (error) {
            console.log(error)
        }

    };


    const handleIntervalUpdate = (card) => {
        if (profile.statusId.id === 2) {
            profile.intervalId = card;
        }

        try {
            axios.put(
                `http://localhost:8090/profiles/${profile.id}`, profile
            )
            sessionStorage.removeItem("loggedIn")

            sessionStorage.setItem("loggedIn", JSON.stringify(profile));

            setUpdatedPlan(true);

        } catch (error) {
            console.log(error)
        }

    };

    const filterServicePlanButtonOptions = (card) => {
        if (profile.statusId.id === 4) {
            return (<Button variant="contained" color="error" size="small" >To re-subscribe, please update account in 'view account'</Button>);
        }
        if (profile.servicePlanId.id === card.id && card.id === 1) {
            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        // if we reach here, our free trial was changed, cannot revert back
        if (card.id === 1) {
            return (<Button variant="contained" color="error" size="small" >Ineligible</Button>);
        }
        if (profile.servicePlanId.id === card.id) {
            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        return (<Button variant="contained" color="warning" size="small" onClick={async () => handleServicePlanUpdate(card)}>Switch To This Plan</Button>);
    }

    const filterStatusButtonOptions = (card) => {
        if (profile.statusId.id === 4) {
            return (<Button variant="contained" color="error" size="small" >To re-subscribe, please update account in 'view account'</Button>);
        }
        if (profile.servicePlanId.id === 1 && card.id === 1) {

            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        if (card.id === 1) {
            return (<Button variant="contained" color="error" size="small" >Ineligible</Button>);
        }
        if ((profile.servicePlanId.id === 2 && card.id === 2) || (profile.servicePlanId.id === 3 && card.id === 2) || (profile.servicePlanId.id === 4 && card.id === 2)) {

            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        if (profile.servicePlanId.id === null && card.id === 3) {
            return (<Button variant="contained" color="error" size="small" >Expiring</Button>);
        }
        return (<Button variant="contained" color="warning" className="btn btn-success" size="small"></Button>);
    }

    const filterIntervalButtonOptions = (card) => {
        if (profile.statusId.id === 4) {
            return (<Button variant="contained" color="error" size="small" >To re-subscribe, please update account in 'view account'</Button>);
        }
        if (profile.servicePlanId.id === 1 && profile.statusId.id === 1 && card.id === 1) {
            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        if (card.id === 1) {
            return (<Button variant="contained" color="error" size="small" >Ineligible</Button>);
        }
        if (profile.statusId.id === 2 && profile.intervalId.id === card.id) {
            return (<Button variant="contained" color="success" size="small" >Active</Button>);
        }
        if (profile.statusId.id === 2) {
            return (<Button variant="contained" color="warning" size="small" onClick={async () => handleIntervalUpdate(card)} >use this interval</Button>);
        }
        return (<Button variant="contained" color="warning" className="btn btn-success" size="small"></Button>);
    }

    return (


        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>

                {/* start of service plans */}
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
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
                                        {filterServicePlanButtonOptions(card)}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <br></br>

                    {/* start of statuses */}
                    <Grid container spacing={4}>
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
                                        {filterStatusButtonOptions(card)}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <br></br>

                    {/* start of intervals */}
                    <Grid container spacing={4}>
                        {intervals.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random/408"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Interval •
                                            {card.id}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {card.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 8 }} color="text.secondary" gutterBottom>
                                            {card.duration} days
                                        </Typography>
                                        <Typography variant="body2">
                                            leo integer malesuada nunc vel risus commodo viverra
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {filterIntervalButtonOptions(card)}
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