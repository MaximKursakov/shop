import { useEffect, useState } from "react";
import { BsDashSquare } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom"

export function Cart ({Basket, setBasket}) {
    const [price, setPrice] = useState(0)

    function removeItem(el) {
        setBasket(Basket.filter((item) => {
            return item.basketID !== el.basketID
        }));
    }

    function addBasketID() {
        let counter = 0
        setBasket(prevBasket => prevBasket.map((item) => {
            counter++
            return {...item, basketID: counter}
        }))
        }

        

    function getTotalPrice() {
        setPrice(Basket.reduce((a,v) =>  a = a + v.price , 0 ))
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

    useEffect(() => {
        addBasketID()
    }, [price])

    return(
        <div>
            <h1>Shopping Basket</h1>
            <h2>product</h2>
            {price === 0 
            ? <p>Basket is empty, click <Link to={"/Chairs"}>here</Link> to browse our shop!</p>
            : <div>
                {BasketWithoutDuplicates.map((item) => (
                <div key={item.id} className="cartItem" >
                    <img src={`images/${BasketWithoutDuplicates.title}.avif`}  alt={BasketWithoutDuplicates.title}></img>
                    <p>{item.title}</p>
                    <p>{item.price}€</p>
                    <button onClick={() => removeItem(item)}>remove</button>
                    <div>
                        <button onClick={() =>{
                            removeItem(item)
                            
                        } }>-</button>
                        <p>{duplicateCounter[item.title]}</p>
                        <button onClick={() => {
                            console.log(Basket)
                            
                            setBasket(basket => basket.concat(item))}}>+</button>
                    </div>
                </div>
            ))}
            
            <p>Total : {price}€</p>
            </div>
            }
        </div>
    )
}