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
    const [Wishlist, setWishlist] = useState([])
    const [WishlistState, setWishlistState] = useState(true)

    function addToWishlist(chair) {
        setWishlist(Wishlist.concat(chair))
        setWishlistState(false)
        
    }
    function removeFromWishlist(chair) {
        setWishlist(Wishlist.filter(myWishlist => {
            return myWishlist !== chair
        }))
        setWishlistState(true)
        console.log(Wishlist)

    }

    return(
        <div>
            {chairInfo.map((chair) => (
                <div key={chair.id}>
                        <Link to={`/Chairs/${chair.title}`} state={{ chair}}>
                            <img src={"images/"+ chair.title + ".avif"}  alt={chair.title} className="chair"></img>
                            </Link>
                    {WishlistState 
                    ?   <p className="addToWishlist" onClick={() => addToWishlist(chair.id)}>+</p>
                    :   <p className="removeFromWishlist" onClick={() => removeFromWishlist(chair.id)}>-</p>}
                    <Link to={`/Chairs/${chair.title}`} state={{ chair}}>
                        {chair.description}
                        </Link>
                    <p>{chair.price}€</p>
                </div>
            ))}
        </div>
    )
}

