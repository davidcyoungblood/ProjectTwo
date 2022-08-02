//Kevin will do this one

// sign up button

// sign in button

// link to sign

// Wednesday buttons compete
// import { Logo } from "../components";

// import { makeStyles } from '@mui/material';

import Button from '@mui/material/Button'
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {
    return (
        <>
            {/* <NavLink href="SignUp">
                <Button variant="contained" size="large" href="outlined-buttons" onClick={() => {
                    alert('Signed up');
                }}>
                    SignUp
                </Button>
            </NavLink>
            <NavLink href="SignIn">
                <Button variant="contained" size="large" href="outlined-buttons">
                    SignIn
                </Button>
            </NavLink> */}

            <SignUp />
            <SignIn />
        </>
    );
};

