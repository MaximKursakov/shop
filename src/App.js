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
  const [chairInfo, setChairInfo] = useState([{
    title: "Solomon", description:"Dining Chair, Faux Sheepskin & Black Legs", price: 220, wishlist: false, id: 1
},
{
    title: "Abbon", description:"Woven Dining Chair, Charcoal Black Wash", price: 350, category: "dining", wishlist: false, id: 2
},
{
    title: "Hektor", description:"Tub Office Chair, Tan & Black", price: 230, category: "office", wishlist: false, id: 3
},
{
    title: "Kubrick", description:"Wing Back Chair, Scuba Blue Fabric", price: 525, category: "bedroom", wishlist: true, id: 4
}])

  return (
    <BrowserRouter>
    <Navbar Basket={Basket}></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Chairs" element={<Chairs chairInfo={chairInfo} setChairInfo={setChairInfo}wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails setBasket={setBasket} Basket={Basket} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Cart' element={<Cart setBasket={setBasket} Basket={Basket}></Cart>}/>
      <Route path='/Wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} setBasket={setBasket} Basket={Basket}></Wishlist>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
