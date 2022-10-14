import { Chair } from "./chair"

export function Shop () {
    const chairInfo = [{
        title: "Solomon", description:"Dining Chair, Faux Sheepskin & Black Legs", price: 220, id: 1
    }]
    return(
        <div>
            <h1>shop</h1>
            <Chair chairInfo={chairInfo}></Chair>
        </div>
    )
}