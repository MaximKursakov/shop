import { useEffect, useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import "./Cart.css"

export function Cart ({Basket, setBasket}) {
    const [price, setPrice] = useState(0)

    function removeItem(el) {
        setBasket(Basket.filter((item) => {
            return item.basketID !== el.basketID
        }));
    }

    function removeBundle(el) {
        setBasket(Basket.filter((item) => {
            return item.id !== el.id
        }));
    }

    function addBasketID() {
        let counter = 0
        setBasket(prevBasket => prevBasket.map((item) => {
            counter++
            return {...item, basketID: counter}
        }))
        }

    useEffect(() => {
        addBasketID()
    }, [price])
    

    function getTotalPrice() {
        setPrice(Basket.reduce((a,v) =>  a = a + getSalePrice(v.price, v.discount) , 0 ))
    }

    useEffect(() => {
        getTotalPrice()
    }, )



    let BasketWithoutDuplicates = [];
    let duplicateCounter = {};
    for (let i = 0; i < Basket.length; i++) {
    if (!duplicateCounter[Basket[i].title]) {
        BasketWithoutDuplicates.push(Basket[i]);
    }
    duplicateCounter[Basket[i].title] = ((duplicateCounter[Basket[i].title] || 0) + 1);
    }
    for (let i = 0; i < BasketWithoutDuplicates.length; i++) {
        BasketWithoutDuplicates[i].times = duplicateCounter[BasketWithoutDuplicates[i].title];
    }
    function getSalePrice(n,p) {
        return n - (n * (p/100));
    }

    return(
        <div>
            <div className="cart-header">
                <span></span>
                <p>Basket</p>
            </div>
            <h1 className="cart-header-title">SHOPPING CART</h1>
            <div className="cart-container">
            {price === 0 
            ? <p>Basket is empty, click <Link to={"/shop/Chairs"}>here</Link> to browse our shop!</p>
            : <div className="cart-items">
                {BasketWithoutDuplicates.map((item) => (
                <div key={item.id} className="cart-item" >
                    <div className="cart-column">
                        <p className="remove-bundle" onClick={() => removeBundle(item)}><IoIosRemoveCircleOutline></IoIosRemoveCircleOutline></p>
                        <Link to={`/shop/Chairs/${item.title}`} state={{item}}><img className="cart-img" src={`/shop/images/${item.title}.png`}  alt={BasketWithoutDuplicates.title}></img></Link>
                        <p className="cart-title">{item.title}</p>
                    </div>
                    <div className="individual-price">
                        <p className="item-price">{getSalePrice(item.price, item.discount)}€</p>
                        {item.discount > 0 
                        && <p className="cart-discount">(-{item.discount}%)</p>}
                    </div>
                    <div className="basket-itemcounter">
                        <h3>Quantity</h3>
                        <button data-testid="quantity-reduce-display" onClick={() =>removeItem(item) }><BsCaretLeftFill></BsCaretLeftFill></button>
                        <p data-testid="quantity-display">{duplicateCounter[item.title]}</p>
                        <button data-testid="quantity-increase-display" onClick={() => setBasket(basket => basket.concat(item))}><BsCaretRightFill></BsCaretRightFill></button>
                    </div>
                    <p className="item-total-price">{getSalePrice(item.price, item.discount) * duplicateCounter[item.title]}€</p>
                </div>
            ))}
            
            </div>
            }
            <div className="cart-total">
                <h2>CART TOTALS</h2>
                <div className="subtotal">
                    <h3>Subtotal</h3>
                    <p>{price}€</p>
                </div>
                <div className="shipping">
                    <h3>Shipping</h3>
                    <p>Free Shipping to Germany</p>
                </div>
                <div className="total-price">
                    <h3>Total</h3>
                    <p data-testid="total-price-display">{price}€</p>
                </div>
                <button className="checkout">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}