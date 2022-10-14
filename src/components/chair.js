import {useState} from "react"

export function Chair(props) {
    const chairInfo = props.chairInfo
    const [cart, setCart] = useState([1,2, 1])
    const [cartState, setCartState] = useState(true)
    function addToCart(chair) {
        setCart(cart.concat(chair))
        setCartState(false)
    }
    function removeFromCart(chair) {
        setCart(cart.filter(myCart => {
            return myCart !== chair
        }))
        setCartState(true)
    }
    console.log(cart)
    console.log(cartState)
    return(
        <div>
            {chairInfo.map((chair) => (
                <div key={chair.id}>
                    <img src={"images/"+ chair.title + ".avif"}  alt={chair.title} className="chair"></img>
                    {cartState 
                    ?   <p className="addToCart" onClick={() => addToCart(chair.id)}>+</p>
                    :   <p className="removeFromCart" onClick={() => removeFromCart(chair.id)}>-</p>}
                    <p>{chair.description}</p>
                    <p>{chair.price}€</p>
                </div>
            ))}
        </div>
    )
}

