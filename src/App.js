import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from "./components/Contact"
import { Chairs } from './components/chair';
import React, { useState } from 'react';
import { ChairDetails } from './chairDetails';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';

function App() {
  const [Basket, setBasket] = useState([{title: "Solomon", price: 20, id: 20}])
  const [wishlist, setWishlist] = useState([{title: "Kubrick", description:"Wing Back Chair, Scuba Blue Fabric", price: 525, category: "bedroom", id: 4}])
  return (
    <BrowserRouter>
    <Navbar Basket={Basket}></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Chairs" element={<Chairs wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails setBasket={setBasket} Basket={Basket} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Cart' element={<Cart setBasket={setBasket} Basket={Basket}></Cart>}/>
      <Route path='/Wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} setBasket={setBasket} Basket={Basket}></Wishlist>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
