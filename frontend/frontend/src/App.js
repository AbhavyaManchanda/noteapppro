// import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Signup from './components/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="/signup" element={<Signup/>}/>

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
