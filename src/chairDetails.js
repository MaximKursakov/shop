import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export function ChairDetails(props) {
    const location = useLocation()
    const chairInfo = location.state.chair
    const [Basket, setBasket] = useState([{hey : "yes"}])
    // console.log(Basket)

    function addToBasket() {
        setBasket(Basket.concat(chairInfo))
        // console.log(Basket.indexOf(chairInfo))
    }

    const itemInBasket = Basket.indexOf(chairInfo)
console.log(Basket)


    return(
        <div>
            <div key={chairInfo.id}>
                    <img src={`/images/${chairInfo.title}.avif`}  alt={chairInfo.title} className="chairInfo"></img>
                    <p>{chairInfo.description}</p>
                    <p>{chairInfo.price}€</p>
                    {itemInBasket !== -1 && <p>Item is in Basket</p>}
                    {Basket.length === 0 
                    ? <button onClick={addToBasket}>add to Basket</button>
                    : <button onClick={addToBasket}>add another to Basket</button>}
                </div>
        </div>
    )
}