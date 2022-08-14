import * as React from 'react';
import { NavBar } from "../components/NavBar";
import { MyHome} from '../components/homedata'

export const Home = () => {

  return (
    <div className='App'>
      <NavBar />
      <MyHome/>
    </div>
  );
}
