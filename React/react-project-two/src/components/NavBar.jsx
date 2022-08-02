import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <Navbar id="navbar" sticky="top" >
          <Container id="nav-content">
            <NavLink as={Link} to="/home" >Home</NavLink>
            <NavLink as={Link} to="/viewaccount">View Account</NavLink>
            <NavLink href="/">Sign Out</NavLink> {/** as={Link} to="/" */}
          </Container>
        </Navbar>
    )

}