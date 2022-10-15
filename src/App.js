import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from "./components/Contact"
import { Chairs } from './components/chair';
import React from 'react';
import { ChairDetails } from './chairDetails';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Chairs" element={<Chairs/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
