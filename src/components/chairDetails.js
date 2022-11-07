import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { WishlistManage } from "./wishlistManage"
import { BsCartCheck } from "react-icons/bs"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Discount } from "./discount";

export function ChairDetails({chairInfo, setChairInfo, wishlist, setWishlist, setBasket, Basket}) {
    const location = useLocation()
    const chairName = Object.keys(location.state)[0]
    const chair = location.state[chairName]
    const [basketNotification, setBasketNotification] = useState(false)

    const [quantity, setQuantity] = useState(1)

    function addToBasket(stock) {
        for(let i = 0; i < quantity; i++)
        {setBasket(basket => basket.concat(chair))}
        if (stock > 0) {
            setBasketNotification(true)
        setTimeout(() => {
            setBasketNotification(false)
        }, 5000);
        }
        else alert("item currently out of stock!")
        
    }
    // function getSalePrice(n,p) {
    //     return n - (n * (p/100));
    // }

    return(
        <div >
            <div className="info-container">
                <div className="image-container">
                    <img src={`shop/images/${chair.title}.png`}  alt={chair.title} className="detailsImage"></img>
                </div>
                <div className="chair-info">
                    <h1>{chair.title} | by Lorem Ipsum</h1>
                    {chair.availability <= 4 && chair.availability > 0
                    ? <p className="chair-availability" style={{color: "#c79393"}}>Availability: only {chair.availability} available!</p>
                    : <p className="chair-availability">Availability: {chair.availability} in Stock</p>}
                    {chair.availability === 0
                    && <p className="chair-availability" style={{color: "#c79393"}}>Out of Stock!</p>}
                    <p className="chair-description">{chair.description}</p>
                    <Discount chair={chair}></Discount>
                    <div className="quantityManager">
                        <p>Quantity: </p>
                        <button  onClick={() => {if(quantity > 1) setQuantity(quantity - 1)}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <div className="basket-container">
                        {Basket.length === 0 
                        ? <button className="add-to-basket" onClick={() => addToBasket(chair.availability)}>add to Basket</button>
                        : <button className="add-to-basket" onClick={() => addToBasket(chair.availability)}>add another to Basket</button>}
                        {basketNotification 
                        && <p className="basket-notification"><BsCartCheck></BsCartCheck></p>}
                    </div>
                </div>
            </div>
            <Tabs className="chair-tabs">
                <TabList className="itemInfo">
                    <Tab>Description</Tab>
                    <Tab>Additional Info</Tab>
                </TabList>
                <span></span>
                <TabPanel className="item-description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </TabPanel>
                <div className="additional-info-container">
                    <TabPanel className="additional-info">
                        <h3>Chair Info</h3>
                        <div className="info-column">
                            <p>weight</p>
                            <p>5kg</p>
                        </div>
                        <div className="column-separator"></div>
                        <div className="info-column">
                            <p>Size</p>
                            <p>Medium</p>
                        </div>
                        <div className="column-separator"></div>
                        <div className="info-column">
                            <p>Color</p>
                            <p>Brown</p>
                        </div>
                        <div className="column-separator"></div>
                        <div className="info-column">
                            <p>Materials</p>
                            <p>Wood</p>
                        </div>
                        <div className="column-separator"></div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}