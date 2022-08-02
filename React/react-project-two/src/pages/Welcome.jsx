//Kevin will do this one

// sign up button

// sign in button

// link to sign

// Wednesday buttons compete
// import { Logo } from "../components";

// import { makeStyles } from '@mui/material';

import Button from "@mui/material/Button";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { Link } from "react-router-dom";
import NavLink from "react-bootstrap/esm/NavLink";

export const Welcome = () => {
  return (
    <div className="center">
      <NavLink as={Link} to="/signin">
        <Button>Sign In</Button>
      </NavLink>
      <NavLink as={Link} to="/signup">
        <Button>Sign Up</Button>
      </NavLink>

      
    </div>
  );
};
