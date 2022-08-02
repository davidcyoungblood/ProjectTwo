import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, ViewAccount, Welcome } from "../pages";


import SignIn from "./SignIn";
import SignUp from "./SignUp"
export const Navigation = () => {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/viewaccount" element={<ViewAccount />} />
          <Route path="/" element={<Welcome/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
