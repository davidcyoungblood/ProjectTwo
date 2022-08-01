import './App.css';
import { Navigation } from './components/Navigation';
import {BrowserRouter} from "react-router-dom";
import { Logo } from './components';
import {Container} from './components/data'


function App() {
  return (
    <>
    <div>
    <Logo/>
    <Navigation/>
    </div>
    
    
    </>
    
  );
}

export default App;
