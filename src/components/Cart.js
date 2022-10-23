import { useLocation } from "react-router-dom"

export function Cart ({Basket, setBasket}) {
    return(
        <div>
            {Basket.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )
}