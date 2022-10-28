import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";


export function Navbar({Basket, wishlist}) {
    return(
        <nav>
            <div className="sticky-bar">
                <NavLink to="Login"><p className="stick-bar-link">LOGIN</p></NavLink>
                <NavLink to="/Cart"><p className="stick-bar-link">MY CART <div className="basket-size">{Basket.length}</div></p></NavLink>
                <NavLink to="/Wishlist"><p className="stick-bar-link">WISHLIST <div className="wishlist-size">{wishlist.length}</div></p></NavLink>
            </div>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <div className="navbar-links">
                    <div className="navlink1">
                        <NavLink to="/Home">Home</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink2">
                        <NavLink to="/Chairs">Product</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink3">
                        <NavLink to="Contact">Contact</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}