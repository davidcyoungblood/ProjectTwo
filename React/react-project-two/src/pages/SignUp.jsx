import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer, ThunderstormIcon } from '../components';
import { Link as LinkReactRouterDom, useNavigate } from 'react-router-dom';
import axios from 'axios';

// https://github.com/mui/material-ui/blob/v5.9.2/docs/data/material/getting-started/templates/sign-up/SignUp.tsx

const theme = createTheme();

export const SignUp = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate('/signin');
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            // extract data from form and send POST request
            await axios.post(
                `http://localhost:8090/profiles`,
                {
                    firstName: data.get('firstName'),
                    lastName: data.get('lastName'),
                    username: data.get('username'),
                    email: data.get('email'),
                    password: data.get('password')
                }
            );
            navigateToSignIn();
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <ThunderstormIcon />

                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography> 
                        {/* Took out noValidate so that null values are not entered */}
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        //autoComplete="given-name"
                                        
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>

                                    <LinkReactRouterDom variant="body2" style={{ textDecoration: 'underlined' }} to='/signin'>Already have an account? Sign in</LinkReactRouterDom>

                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>

                <Footer/>

            </ThemeProvider>
        </>
    );
}