import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import { Contact } from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
