import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const CardContainer = (props) => {
    return (
        <Container sx={{ py: 5 }} maxWidth="md">
            <Grid container spacing={5}>
                {props.cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={3}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    // pt: '5%',
                                }}
                                // image="https://source.unsplash.com/random"
                                image={props.image}
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.heading}
                                </Typography>
                                <Typography>
                                    {/* {props.object.map((p) => {
                                        return (
                                            <>
                                            {p}
                                            </>
                                        );
                                    })} */}
                                    {card}
                                    {props.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}