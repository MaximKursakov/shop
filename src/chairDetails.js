import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { WishlistManage } from "./components/wishlistManage"

export function ChairDetails({chairInfo, setChairInfo, wishlist, setWishlist, setBasket, Basket}) {
    const location = useLocation()
    const chairName = Object.keys(location.state)[0]
    const chair = location.state[chairName]

    const [quantity, setQuantity] = useState(1)

    function addToBasket() {
        for(let i = 0; i < quantity; i++)
        {setBasket(basket => basket.concat(chair))}
    }

    const itemInBasket = Basket.indexOf(chair)

    function getSalePrice(n,p) {
        return n - (n * (p/100));
    }

    return(
        <div>
            <div>
                    <img src={`/images/${chair.title}.png`}  alt={chair.title} className="detailsImage"></img>
                    <h1>{chair.title} | by Lorem Ipsum</h1>
                    {chair.availability <= 4 
                    ? <p style={{color: "#c79393"}}>Availability: only {chair.availability} available!</p>
                    : <p>Availability: {chair.availability} in Stock</p>}
                    <p>{chair.description}</p>
                    {chair.discount > 0
                    ? <div className="priceDiscounted">
                        <p className="discountPrice">{getSalePrice(chair.price, chair.discount)}€</p>
                        <p className="originalPrice">{chair.price}€</p>
                    </div>
                    : <p className="originalPrice">{chair.price}</p>}
                    <div className="quantityManager">
                        <button  onClick={() => {if(quantity > 0) setQuantity(quantity - 1)}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    {Basket.length === 0 
                    ? <button onClick={addToBasket}>add to Basket</button>
                    : <button onClick={addToBasket}>add another to Basket</button>}
                    
                </div>
        </div>
    )
}