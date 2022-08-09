import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Interval = (props) => {

    const card = (
        <>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Interval •
                    {props.interval.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.interval.name}
                </Typography>
                <Typography sx={{ fontSize: 7 }} color="text.secondary" gutterBottom>
                    {props.interval.duration} days
                </Typography>
                <Typography variant="body2">
                    leo integer malesuada nunc vel risus commodo viverra
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </>
    );
    return (
        <>
            <Card variant="outlined">
                {card}
            </Card>
        </>
    );
}