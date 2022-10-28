import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SortChairs } from "./SortChairs";

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

    const [order, setOrder] = useState({priceLH: false, priceHL: false, nameAZ: false, nameZA: false})

    function changeOrder(e) {
        const orderValue = e.target.value
        if (orderValue === "priceLH") {
            setOrder({priceLH: true, priceHL: false, nameAZ: false, nameZA: false})
        }
        if (orderValue === "priceHL") {
            setOrder({priceLH: false, priceHL: true, nameAZ: false, nameZA: false})
        }
        if (orderValue === "nameAZ") {
            setOrder({priceLH: false, priceHL: false, nameAZ: true, nameZA: false})
        }
        if (orderValue === "nameZA") {
            setOrder({priceLH: false, priceHL: false, nameAZ: false, nameZA: true})
        }
    }

    if(order.priceLH) {
        displayChairs = [...displayChairs].sort((a, b) => a.price - b.price)
    }
    else if(order.priceHL) {
        displayChairs = [...displayChairs].sort((a, b) => b.price - a.price)
    }
    else if(order.nameAZ) {
        displayChairs = [...displayChairs].sort((a, b) => a.title > b.title ? 1 : -1,)
    }
    else if(order.nameZA) {
        displayChairs = [...displayChairs].sort((a, b) => a.title < b.title ? 1 : -1,)
    }

    const [isHovering, setIsHovering] = useState(null)

    return (
        <div className="shop">
            <div className="shop-header">
                <span></span>
                <p>Shop</p>
            </div>
            <SortChairs displayChairs={displayChairs} order={order} setOrder={setOrder} changeOrder={changeOrder}></SortChairs>
            <div className="shop-items">
            {displayChairs.map((chair) => (
                <div className="shop-item" key={chair.id} onMo>
                    {/* <Link to={`/Chairs/${chair.title}`} state={{ chair}}> */}
                        <div style={{
                            backgroundImage: `url(images/${chair.title}.png)`}}  
                            alt={chair.title} 
                            className="chair"
                            onMouseOver={() => setIsHovering(chair.id)}
                            onMouseOut={() => setIsHovering(false)}>
                                {!chair.wishlist 
                    ?   <p className="addToWishlist" onClick={() => addToWishlist(chair)}><AiOutlineHeart></AiOutlineHeart></p>
                    :   <p className="removeFromWishlist" onClick={() => removeFromWishlist(chair)}><AiFillHeart></AiFillHeart></p>}
                            </div>
                            {isHovering === chair.id && <p>{chair.title}</p>}
                            
                    {/* </Link> */}
                    
                </div>
            ))}
            </div>
            
        </div>
    )
}