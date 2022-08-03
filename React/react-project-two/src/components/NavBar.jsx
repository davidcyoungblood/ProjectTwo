import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <>
    <Logo />
    <Navbar id="navbar" sticky="top" >
      <Container >
        <NavLink as={Link} to="/home">Home</NavLink>
        <NavLink as={Link} to="/viewaccount">View Account</NavLink>
        <NavLink as={Link} to="/">Sign Out</NavLink>
      </Container>
    </Navbar>
    </>
  )
}