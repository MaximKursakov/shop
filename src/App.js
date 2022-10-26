import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from "./components/Contact"
import { ChairFilter } from './components/ChairFilter';
import React, { useState } from 'react';
import { ChairDetails } from './chairDetails';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';
import { ChairShop } from './components/chairShop';

function App() {
  const [Basket, setBasket] = useState([{title: "Hektor", description:"Tub Office Chair, Tan & Black", price: 230, category: "office", wishlist: false, id: 3}])
  const [wishlist, setWishlist] = useState([{title: "Kubrick", description:"Wing Back Chair, Scuba Blue Fabric", price: 525, category: "bedroom", id: 4}])
  const [chairInfo, setChairInfo] = useState([{
    title: "ch20", description:"Lorem ipsum dolor sit amet, consetetur", price: 220, category: "dining", wishlist: false, id: 1, featured: true
},
{
    title: "ch23", description:"Lorem ipsum dolor sit amet, consetetur", price: 350, category: "dining", wishlist: false, id: 2, featured: true
},
{
    title: "ch24", description:"Lorem ipsum dolor sit amet, consetetur", price: 230, category: "office", wishlist: false, id: 3, featured: true
},
{
    title: "ch26", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 4, featured: false
},
{
    title: "ch29", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 5, featured: false
},
{
    title: "ch30", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 6, featured: true
},
{
    title: "ch33", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 7, featured: false
},
{
    title: "ch36", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 8, featured: true
},
{
    title: "ch37", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 9, featured: false
},
{
    title: "ch46", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 10, featured: true
},
{
    title: "ch47", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 11, featured: false
},
{
    title: "ch88b", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 12, featured: false
},
{
    title: "ch88t", description:"Lorem ipsum dolor sit amet, consetetur", price: 525, category: "bedroom", wishlist: false, id: 13, featured: false
}])

  return (
    <BrowserRouter>
    <Navbar Basket={Basket} wishlist={wishlist}></Navbar>
    <Routes>
      <Route path='/' element={<Navigate to="/Home"></Navigate>}/>
      <Route path='/Home' element={<Home chairInfo={chairInfo}/> }/>
      <Route path='/ChairShop' element={<ChairShop></ChairShop>}/>
      <Route path="/Chairs" element={<ChairFilter chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails setBasket={setBasket} Basket={Basket} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Cart' element={<Cart setBasket={setBasket} Basket={Basket}></Cart>}/>
      <Route path='/Wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} setBasket={setBasket} Basket={Basket}></Wishlist>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
