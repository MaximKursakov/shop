import {useState} from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"

export function Chairs({chairInfo, setChairInfo, wishlist, setWishlist}) {
    

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

