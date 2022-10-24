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
                    <NavLink to="/Home">HOME</NavLink>
                    <NavLink to="/Chairs">SHOP</NavLink>
                    <NavLink to="Contact">CONTACT</NavLink>
                </div>
                <div className="search"><BsSearch></BsSearch></div>
            </div>
        </nav>
    )
}