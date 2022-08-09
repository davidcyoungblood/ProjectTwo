import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Copyright } from '../components';

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 5 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                eget est lorem ipsum dolor sit amet consectetur adipiscing elit
            </Typography>

            <Copyright />
        </Box>
    );
}