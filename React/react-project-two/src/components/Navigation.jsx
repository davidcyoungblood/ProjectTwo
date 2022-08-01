import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, ViewAccount, SignOut } from "../pages";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
export const Navigation = () => {
  return (
    <>
    <BrowserRouter >
      <Navbar >
        <Container id="navbar">
          <NavLink as={Link} to="/home">Home</NavLink>
          <NavLink as={Link} to="/signout">Sign Out</NavLink>
          <NavLink as={Link} to="/viewaccount">View Account</NavLink>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/viewaccount" element={<ViewAccount />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};
