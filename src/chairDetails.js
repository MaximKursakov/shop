import { useLocation, useParams } from "react-router-dom"

export function ChairDetails({setBasket, Basket}) {
    const location = useLocation()
    const chair = Object.keys(location.state)[0]
    const chairInfo = location.state[chair]
    
    console.log(location.state)
    console.log(chair)

    function addToBasket() {
        setBasket(Basket.concat(chairInfo))
    }

    const itemInBasket = Basket.indexOf(chairInfo)
    


    return(
        <div>
            <div key={chairInfo.id}>
                    <img src={`/images/${chairInfo.title}.png`}  alt={chairInfo.title} className="chairInfo"></img>
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