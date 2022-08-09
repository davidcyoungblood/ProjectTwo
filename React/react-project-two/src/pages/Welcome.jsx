import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ServicePlanList, StatusList, IntervalList, Footer } from '../components';
import { ThunderstormIcon } from '../components';
import { Link } from 'react-router-dom';

// https://github.com/mui/material-ui/tree/v5.9.3/docs/data/material/getting-started/templates/album

export const Welcome = () => {
  const theme = createTheme();

  return (
    <>
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

          <ServicePlanList />
          <StatusList />
          <IntervalList />

        </main>

        <Footer />

      </ThemeProvider>
    </>
  );
}