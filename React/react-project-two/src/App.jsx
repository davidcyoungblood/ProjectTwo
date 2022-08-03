import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SignIn, SignUp, ViewAccount, Welcome } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/viewaccount" element={<ViewAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}