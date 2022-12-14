import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Wishlist.css"

export function Wishlist ({wishlist, setWishlist, Basket, setBasket}) {
    function removeItem(el) {
        setWishlist(wishlist.filter((item) => {
            return item !== el
        }));
    }
    function getSalePrice(n,p) {
        return n - (n * (p/100));
    }
    return(
        <div>
            <div className="cart-header">
                <span></span>
                <p>Wishlist</p>
            </div>
            <div className="wishlist-items">
                {wishlist.map((item) => (
                <div key={item.id} className="wishlist-item" >
                    <div className="cart-column">
                        <p className="remove-bundle" onClick={() => removeItem(item)}><IoIosRemoveCircleOutline></IoIosRemoveCircleOutline></p>
                        <Link to={`/shop/Chairs/${item.title}`} state={{item}}><img className="cart-img" src={`/shop/images/${item.title}.png`}  alt={wishlist.title}></img></Link>
                        <p className="cart-title">{item.title}</p>
                    </div>
                    <div className="wishlist-right">
                        <div className="individual-price">
                            <p className="item-price">{getSalePrice(item.price, item.discount)}€</p>
                            {item.discount > 0 
                            && <p className="wishlist-discount">(-{item.discount}%)</p>}
                        </div>
                        <p>In Stock</p>
                        <Link className="wishlist-basket" to={"/shop/Cart"} onClick={() => setBasket(Basket.concat(item))}>ADD TO BASKET</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}