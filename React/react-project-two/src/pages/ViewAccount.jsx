import { Container } from "../components/data";
import { NavBar } from "../components/NavBar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Copyright, Footer } from '../components';
export const ViewAccount = () => {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <Footer />
    </div>
  );
};
