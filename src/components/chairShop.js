import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SortChairs } from "./SortChairs";
import { motion} from "framer-motion"


export function ChairShop({displayChairs, chairInfo, setChairInfo, wishlist, setWishlist }) {
    function addToWishlist(chair) {
        setWishlist(wishlist.concat(chair))
        setChairInfo(chairInfo.map(item => {
            if (item.id === chair.id){
              return {...item, wishlist: true}
            }
            return item
          }));
    }
    function removeFromWishlist(chair) {
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

    
    const [isHovering, setIsHovering] = useState(null)

    return (
        <div>
            <div className="shop-section">
                <div className="shop-items">
                {displayChairs.map((chair) => (
                    <div className="shop-item" key={chair.id} onMo>
                        
                            <div 
                                style={{
                                backgroundImage: `url(images/${chair.thumbnailimg}.jpg)`}}  
                                alt={chair.title} 
                                className="chair"
                                onMouseOver={() => setIsHovering(chair.id)}
                                onMouseOut={() => setIsHovering(false)}>
                                    {isHovering === chair.id 
                                    && <div className="chair-hover">
                                        {!chair.wishlist 
                        ?   <p className="addToWishlist" onClick={() => addToWishlist(chair)}><AiOutlineHeart></AiOutlineHeart></p>
                        :   <p className="removeFromWishlist" onClick={() => removeFromWishlist(chair)}><AiFillHeart></AiFillHeart></p>}
                                        </div>}
                                </div>
                                
                    </div>
                ))}
                </div>
               
            </div>
        </div>
    )
}