// import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './pages/Profile';
import SingleNotePage from './pages/SingleNotePages';
import AddNote from './pages/AddNote';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Nopage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/addnote' element={<AddNote/>}/>
      <Route path='/singlenotepage' element={<SingleNotePage/>}/>


      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
