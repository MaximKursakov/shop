import { NavLink } from "react-router-dom";
import { BsCart3} from "react-icons/bs";

export function Navbar() {
    return(
        <nav>
            <div>LOGO</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Chairs">Shop</NavLink>
            <NavLink to="Contact">Contact</NavLink>
            <NavLink to="/Cart" aria-label="Shopping Cart"><BsCart3></BsCart3></NavLink>
        </nav>
    )
}