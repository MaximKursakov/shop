import { NavLink } from "react-router-dom";
import { BsCart3} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export function Navbar() {
    return(
        <nav>
            <div>LOGO</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Chairs">Shop</NavLink>
            <NavLink to="Contact">Contact</NavLink>
            <NavLink to="/Cart" aria-label="Shopping Cart" className={"basket"}><BsCart3></BsCart3></NavLink>
            <NavLink to="/Wishlist" aria-label="wishlist" className={"wishlist"}><AiOutlineHeart></AiOutlineHeart></NavLink>
        </nav>
    )
}