import {useState} from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"

export function Chairs({wishlist, setWishlist}) {
    const [chairInfo, setChairInfo] = useState([{
        title: "Solomon", description:"Dining Chair, Faux Sheepskin & Black Legs", price: 220, wishlist: false, id: 1
    },
    {
        title: "Abbon", description:"Woven Dining Chair, Charcoal Black Wash", price: 350, category: "dining", wishlist: false, id: 2
    },
    {
        title: "Hektor", description:"Tub Office Chair, Tan & Black", price: 230, category: "office", wishlist: false, id: 3
    },
    {
        title: "Kubrick", description:"Wing Back Chair, Scuba Blue Fabric", price: 525, category: "bedroom", wishlist: true, id: 4
    }])

    function addToWishlist(chair) {
        console.log(wishlist)
        setWishlist(wishlist.concat(chair))
        setChairInfo(chairInfo.map(item => {
            if (item.id === chair.id){
              return {...item, wishlist: true}
            }
            return item
          }));
    }
    function removeFromWishlist(chair) {
        console.log(wishlist)
        setWishlist(wishlist.filter(item => {
            return item.id !== chair.id
        }))
        setChairInfo(chairInfo.map(item => {
            if (item.id === chair.id){
              return {...item, wishlist: false}
            }
            return item
          }));
    
    }

    return(
        <div>
            {chairInfo.map((chair) => (
                <div key={chair.id}>
                        <Link to={`/Chairs/${chair.title}`} state={{ chair}}>
                            <img src={"images/"+ chair.title + ".avif"}  alt={chair.title} className="chair"></img>
                            </Link>
                    {!chair.wishlist 
                    ?   <p className="addToWishlist" onClick={() => addToWishlist(chair)}><AiOutlineHeart></AiOutlineHeart></p>
                    :   <p className="removeFromWishlist" onClick={() => removeFromWishlist(chair)}><AiFillHeart></AiFillHeart></p>}
                    <Link to={`/Chairs/${chair.title}`} state={{ chair}}>
                        {chair.description}
                        </Link>
                    <p>{chair.price}€</p>
                </div>
            ))}
        </div>
    )
}

