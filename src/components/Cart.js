import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export function Cart ({Basket, setBasket}) {
    const [price, setPrice] = useState(0)
    function removeItem(el) {
        setBasket(Basket.filter((item) => {
            return item !== el
        }));
    }
    function getTotalPrice() {
        setPrice(Basket.reduce((a,v) =>  a = a + v.price , 0 ))
    }
    useEffect(() => {
        getTotalPrice()
    })
    return(
        <div>
            {Basket.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeItem(item)}>remove</button>
                </div>
            ))}
            <p>{price}</p>
        </div>
    )
}