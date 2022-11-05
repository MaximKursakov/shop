import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export function Cart ({Basket, setBasket}) {
    const [price, setPrice] = useState(0)
    // function handleClick() {
    //     let counter = 0
    //     setBasket(prevBasket => prevBasket.map((item) => {
    //         counter++
    //         return {...item, basketID: counter}
    //     }))
        
    //     console.log(Basket)
    // }
    function removeItem(el) {
        setBasket(Basket.filter((item) => {
            return item.basketID !== el.basketID
        }));
    }

    useEffect(() => {
        let counter = 0
        setBasket(prevBasket => prevBasket.map((item) => {
            counter++
            return {...item, basketID: counter}
        }))
        
        console.log(Basket)
    }, [])
    function getTotalPrice() {
        setPrice(Basket.reduce((a,v) =>  a = a + v.price , 0 ))
    }
    useEffect(() => {
        getTotalPrice()
    })
    return(
        <div>
            <h1>Shopping Basket</h1>
            <h2>product</h2>
            {price === 0 
            ? <p>Basket is empty, click <Link to={"/Chairs"}>here</Link> to browse our shop!</p>
            : <div>
                {Basket.map((item) => (
                <div key={item.id} className="cartItem" >
                    <img src={`images/${Basket.title}.avif`}  alt={Basket.title}></img>
                    <p>{item.title}</p>
                    <p>{item.price}€</p>
                    <button onClick={() => removeItem(item)}>remove</button>
                </div>
            ))}
            <p>Total : {price}€</p>
            </div>
            }
        </div>
    )
}