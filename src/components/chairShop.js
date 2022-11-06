import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SortChairs } from "./SortChairs";
import { WishlistManage } from "./wishlistManage";
import { motion} from "framer-motion"


export function ChairShop({displayChairs, chairInfo, setChairInfo, wishlist, setWishlist }) {
    
    const [isHovering, setIsHovering] = useState(null)

    return (
        <div>
            <div className="shop-section">
                <div className="shop-items">
                {displayChairs.map((chair) => (
                    <div className="shop-item" key={chair.id} onMo>
                        
                            <motion.div 
                                style={{
                                backgroundImage: `url(./shop/images/${chair.thumbnailimg}.jpg)`}}  
                                alt={chair.title} 
                                className="chair"
                                onMouseOver={() => setIsHovering(chair.id)}
                                onMouseOut={() => setIsHovering(false)}>
                                    {isHovering === chair.id 
                                    && <div className="chair-hover">
                                        <WishlistManage chair={chair} wishlist={wishlist} setWishlist={setWishlist} chairInfo={chairInfo} setChairInfo={setChairInfo}></WishlistManage>
                                        <div className="chair-mid">
                                            <p>{chair.title}</p>
                                            <Link to={`/Chairs/${chair.title}`} state={{chair}}> {">"} </Link>
                                        </div>
                                        </div>}
                                </motion.div>
                                
                    </div>
                ))}
                </div>
               
            </div>
        </div>
    )
}