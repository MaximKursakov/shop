import { useState } from "react";
import { Link } from "react-router-dom";
import { WishlistManage } from "./wishlistManage";
import { motion} from "framer-motion"


export function ChairShop({displayChairs, chairInfo, setChairInfo, wishlist, setWishlist }) {
    
    const [isHovering, setIsHovering] = useState(null)

    return (
        <div>
            <div className="shop-section">
                <div className="shop-items">
                {displayChairs.map((chair) => (
                    <motion.div 
                    whileInView={{y : 0, opacity: 1}}
                    initial={{y : 100, opacity: 0}} 
                    transition={{duration: .8}} 
                    viewport={{once: true}}
                    className="shop-item" 
                    key={chair.id}>
                            <motion.div 
                                style={{
                                backgroundImage: `url(shop/images/${chair.thumbnailimg}.jpg)`}}  
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
                                <p className="media-title">{chair.title}</p>
                    </motion.div>
                ))}
                </div>
               
            </div>
        </div>
    )
}