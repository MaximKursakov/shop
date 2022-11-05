import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Wishlist ({wishlist, setWishlist, Basket, setBasket}) {
    function removeItem(el) {
        setWishlist(wishlist.filter((item) => {
            return item !== el
        }));
    }

    return(
        <div>
            <h1>Wishlist</h1>
            {wishlist.map((item) => (
                <div key={item.id} className="wishlistItem">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Link to={"/Cart"} onClick={() => setBasket(Basket.concat(item))}><BsFillBagPlusFill></BsFillBagPlusFill></Link>
                    <button onClick={() => removeItem(item)}></button>
                </div>
            ))}
        </div>
    )
}