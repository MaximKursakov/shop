import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Contact } from "./components/Contact"
import { ChairFilter } from './components/ChairFilter';
import React, { useState } from 'react';
import { ChairDetails } from './components/chairDetails';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';
import { ChairShop } from './components/chairShop';
import { Footer } from './components/Footer';

function App() {
  const [Basket, setBasket] = useState([{
    title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20,
},{
    title: "ch23", thumbnailimg: "thumbnail2",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 350.00, category: "dining", wishlist: false, id: 2, featured: false, availability: 2, discount: 20
},{
    title: "ch23", thumbnailimg: "thumbnail2",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 350.00, category: "dining", wishlist: false, id: 2, featured: false, availability: 5, discount: 20
}])
  const [wishlist, setWishlist] = useState([{
    title: "ch37", thumbnailimg: "thumbnail4",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 400.00, category: "dininig", wishlist: false, id: 9, featured: false, availability: 8, discount: 0
}])
  const [chairInfo, setChairInfo] = useState([{
    title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20,
},
{
    title: "ch23", thumbnailimg: "thumbnail2",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 350.00, category: "dining", wishlist: false, id: 2, featured: false, availability: 5, discount: 20
},
{
    title: "ch24", thumbnailimg: "thumbnail3",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 230.00, category: "bar", wishlist: false, id: 3, featured: true, availability: 0, discount: 0
},
{
    title: "ch26", thumbnailimg: "thumbnail4",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 525.00, category: "living", wishlist: false, id: 4, featured: false, availability: 9, discount: 30
},
{
    title: "ch29", thumbnailimg: "thumbnail5",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 230.00, category: "bar", wishlist: false, id: 5, featured: false, availability: 8, discount: 0
},
{
    title: "ch30", thumbnailimg: "thumbnail1",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 300.00, category: "dining", wishlist: false, id: 6, featured: true, availability: 3, discount: 0
},
{
    title: "ch33", thumbnailimg: "thumbnail2",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 250.00, category: "living", wishlist: false, id: 7, featured: false, availability: 5, discount: 0
},
{
    title: "ch36", thumbnailimg: "thumbnail3",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 460.00, category: "living", wishlist: false, id: 8, featured: true, availability: 0, discount: 0
},
{
    title: "ch37", thumbnailimg: "thumbnail4",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 400.00, category: "dininig", wishlist: false, id: 9, featured: false, availability: 8, discount: 0
},
{
    title: "ch46", thumbnailimg: "thumbnail5",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 500.00, category: "dininig", wishlist: false, id: 10, featured: true, availability: 8, discount: 30
},
{
    title: "ch47", thumbnailimg: "thumbnail1",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 525.00, category: "living", wishlist: false, id: 11, featured: false, availability: 7, discount: 20
},
{
    title: "ch88b", thumbnailimg: "thumbnail2",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 390.00, category: "bar", wishlist: false, id: 12, featured: false, availability: 2, discount: 0
},
{
    title: "ch88t", thumbnailimg: "thumbnail3",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum", price: 320.00, category: "bar", wishlist: false, id: 13, featured: false, availability: 5, discount: 0
}])

  return (
    <BrowserRouter>
    <Navbar Basket={Basket} wishlist={wishlist}></Navbar>
    <Routes>
      <Route path='/' element={<Navigate to="/Home"></Navigate>}/>
      <Route path='/shop' element={<Navigate to="/Home"></Navigate>}/>
      <Route path='/Home' element={<Home chairInfo={chairInfo}/> }/>
      <Route path='/ChairShop' element={<ChairShop></ChairShop>}/>
      <Route path="/Chairs" element={<ChairFilter chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path='/Chairs/:title' element={<ChairDetails chairInfo={chairInfo} setChairInfo={setChairInfo} setBasket={setBasket} Basket={Basket} wishlist={wishlist} setWishlist={setWishlist}/>}></Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Cart' element={<Cart setBasket={setBasket} Basket={Basket}></Cart>}/>
      <Route path='/Wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} setBasket={setBasket} Basket={Basket}></Wishlist>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
