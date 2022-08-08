import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {

  const handleSignOut = async () => {
    sessionStorage.clear();
  }

  return (
    <>
    
    <Navbar className="navbar" sticky="top" >
        <Logo />
        <Container id="nav-content" fluid>
        <Nav.Link as={Link} to="/home"id = "nav-title"><h5 >Home</h5></Nav.Link>
        <Nav.Link as={Link} to="/viewaccount" id = "nav-title"><h5>View Account</h5></Nav.Link>
        <Nav.Link as={Link} to="/" id = "nav-title" onClick = {handleSignOut}><h5>Sign Out</h5></Nav.Link>
        
        </Container>
        
        
        
    </Navbar>
    </>
  )
}