import { NavLink } from "react-router-dom";
import { Menu } from "../Fullscreen-Menu/fullscreen-menu";
import "./Navbar.css"

export function Navbar({Basket, wishlist}) {
    

    
    return(
        <nav>
            <div className="sticky-bar">
            </div>
            <div className="navbar-container">
                <div className="navbar">
                <div className="logo">LOGO</div>
                <Menu></Menu>
                <div className="navbar-links">
                    <div className="navlink">
                        <NavLink to="/shop/Home">Home</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="/shop/Chairs">Product</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="/shop/Contact">Contact</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="/shop/Cart">Basket ({Basket.length})</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="/shop/Wishlist">Wishlist ({wishlist.length})</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                </div>
                </div>
                
            </div>
        </nav>


                 
               
            
    )
}