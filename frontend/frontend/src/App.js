// import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Profile' element={<Profile/>}/>

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
