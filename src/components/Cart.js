import { useLocation } from "react-router-dom"

export function Cart ({Basket, setBasket}) {
    function removeItem(el) {
        setBasket(Basket.filter((item) => {
            return item !== el
        }));
    }
    return(
        <div>
            {Basket.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => removeItem(item)}>remove</button>
                </div>
            ))}
        </div>
    )
}