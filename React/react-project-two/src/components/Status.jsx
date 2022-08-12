import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useRef } from 'react';
import axios from 'axios';

export const Status = ({ card, setStatusUpdated }) => {

    const [updating, setUpdating] = useState(false);

    const nameRef = useRef();

    const initializeUpdate = () => { setUpdating(true); }
    const cancelUpdate = () => { setUpdating(false); }

    const finalizeUpdate = async (id) => {
        try {
            await axios.put(
                `http://localhost:8090/status/${id}`,
                {
                    name: nameRef.current.value
                }
            );
            setUpdating(false); // will refresh a single component out an updating state 
            setStatusUpdated(true); // will refresh the axios call to pull the list again with updated information
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
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
                    Status •
                    {card.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {updating ? <input className="form-control" name="name" defaultValue={card.name} ref={nameRef} /> : card.name}
                </Typography>
                <Typography variant="body2">
                    vel risus malesuada commodo viverra integer leo nunc.
                </Typography>
            </CardContent>
            <CardActions>
                {updating ? <><button className="btn btn-success" onClick={() => finalizeUpdate(card.id)}>SUBMIT</button> <button className="btn btn-warning" onClick={() => cancelUpdate()}>CANCEL</button></> : <button className="btn btn-primary" onClick={() => { initializeUpdate() }}>EDIT</button>}
            </CardActions>
        </Card>
    );
}