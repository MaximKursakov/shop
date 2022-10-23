import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from "./components/Contact"
import { Chairs } from './components/chair';
import React, { useState } from 'react';
import { ChairDetails } from './chairDetails';
import { Cart } from './components/Cart';

function App() {
  const [Basket, setBasket] = useState([{title: "test item", id: 20}])
  return (
    <BrowserRouter>
    <Navbar Basket={Basket}></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Chairs" element={<Chairs/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails setBasket={setBasket} Basket={Basket}/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Cart' element={<Cart setBasket={setBasket} Basket={Basket}></Cart>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
