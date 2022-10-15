import {useState} from "react"
import { Link, useParams } from "react-router-dom"

export function Chairs() {
    const [chairInfo, setChairInfo] = useState([{
        title: "Solomon", description:"Dining Chair, Faux Sheepskin & Black Legs", price: 220, id: 1
    },
    {
        title: "Abbon", description:"Woven Dining Chair, Charcoal Black Wash", price: 350, category: "dining", id: 2
    },
    {
        title: "Hektor", description:"Tub Office Chair, Tan & Black", price: 230, category: "office", id: 3
    },
    {
        title: "Kubrick", description:"Wing Back Chair, Scuba Blue Fabric", price: 525, category: "bedroom", id: 4
    }])
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

    return(
        <div>
            {chairInfo.map((chair) => (
                <div key={chair.id}>
                        <img src={"images/"+ chair.title + ".avif"}  alt={chair.title} className="chair"></img>
                    {cartState 
                    ?   <p className="addToCart" onClick={() => addToCart(chair.id)}>+</p>
                    :   <p className="removeFromCart" onClick={() => removeFromCart(chair.id)}>-</p>}
                    <Link to={`/Chairs/${chair.title}`} state={{ chair}}>{chair.description}</Link>
                    <p>{chair.price}€</p>
                </div>
            ))}
        </div>
    )
}

