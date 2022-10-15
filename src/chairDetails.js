import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export function ChairDetails(props) {
    const location = useLocation()
    const chairInfo = location.state.chair
    console.log(chairInfo)
    return(
        <div>
            <div key={chairInfo.id}>
                    <img src={`images/${chairInfo.title}.avif`}  alt={chairInfo.title} className="chairInfo"></img>
                    <p>{chairInfo.description}</p>
                    <p>{chairInfo.price}€</p>
                </div>
        </div>
    )
}