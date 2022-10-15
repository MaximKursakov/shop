import { Link } from "react-router-dom";
import { BsCart3} from "react-icons/bs";

export function Navbar() {
    return(
        <nav>
            <div>LOGO</div>
            <Link to="/">Home</Link>
            <Link to="/Chairs">Shop</Link>
            <Link to="Contact">Contact</Link>
            <Link to="/Cart" aria-label="Shopping Cart"><BsCart3></BsCart3></Link>
        </nav>
    )
}