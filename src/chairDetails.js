import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { WishlistManage } from "./components/wishlistManage"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export function ChairDetails({chairInfo, setChairInfo, wishlist, setWishlist, setBasket, Basket}) {
    const location = useLocation()
    const chairName = Object.keys(location.state)[0]
    const chair = location.state[chairName]
    const [basketNotification, setBasketNotification] = useState(false)

    const [quantity, setQuantity] = useState(1)

    function addToBasket() {
        for(let i = 0; i < quantity; i++)
        {setBasket(basket => basket.concat(chair))}
        setBasketNotification(true)
    }
    if(basketNotification) {
        setTimeout(() => {
            setBasketNotification(false)
        }, 5000);
    }

    function getSalePrice(n,p) {
        return n - (n * (p/100));
    }

    return(
        <div >
            <div className="info-container">
                <div className="image-container">
                    <img src={`/images/${chair.title}.png`}  alt={chair.title} className="detailsImage"></img>
                </div>
                <div className="chair-info">
                    <h1>{chair.title} | by Lorem Ipsum</h1>
                    {chair.availability <= 4 
                    ? <p className="chair-availability" style={{color: "#c79393"}}>Availability: only {chair.availability} available!</p>
                    : <p className="chair-availability">Availability: {chair.availability} in Stock</p>}
                    <p className="chair-description">{chair.description}</p>
                    {chair.discount > 0
                    ? <div className="priceDiscounted">
                        <p className="originalPrice">{chair.price}.00 €</p>
                        <p className="discountPrice">{getSalePrice(chair.price, chair.discount)}.00 €</p>
                    </div>
                    : <p className="no-discount">{chair.price}€</p>}
                    {basketNotification 
                    && <p className="basket-notification">Successfully added do Basket</p>}
                    <div className="quantityManager">
                        <p>Quantity: </p>
                        <button  onClick={() => {if(quantity > 1) setQuantity(quantity - 1)}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    
                    {Basket.length === 0 
                    ? <button className="add-to-basket" onClick={addToBasket}>add to Basket</button>
                    : <button className="add-to-basket" onClick={addToBasket}>add another to Basket</button>}
                </div>
            </div>
            <Tabs className="chair-tabs">
                <TabList className="itemInfo">
                    <Tab>Description</Tab>
                    <Tab>Additional Info</Tab>
                </TabList>
                <span></span>
                <TabPanel className="item-description">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </TabPanel>
                <div className="additional-info-container">
                    <TabPanel className="additional-info">
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