import {useState} from "react"
import { ChairShop } from "./chairShop"
import { SortChairs } from "./SortChairs"

export function ChairFilter({chairInfo, setChairInfo, wishlist, setWishlist}) {
    const [filterState, setFilterState] = useState({bar: false, dining: false, livingroom: false, })



    const barChairs = chairInfo.filter(item => item.category === "bar")
    const diningChairs = chairInfo.filter(item => item.category === "dining")
    const livingChairs = chairInfo.filter(item => item.category === "living")


    return(
        <div>
            <button onClick={() => setFilterState(prevState => ({bar: !prevState.bar, dining: false, livingroom: false}))}>bar</button>
            <button onClick={() => setFilterState(prevState => ({bar: false, dining: !prevState.dining, livingroom: false}))}>dining</button>
            <button onClick={() => setFilterState(prevState => ({bar: false, dining: false, livingroom: !prevState.livingroom}))}>livingroom</button>
            {filterState.bar 
            && <ChairShop displayChairs={barChairs} chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {filterState.dining 
            && <ChairShop displayChairs={diningChairs} chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {filterState.livingroom 
            && <ChairShop displayChairs={livingChairs} chairInfo={chairInfo}  setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {!filterState.bar && !filterState.dining && !filterState.livingroom 
            &&  <ChairShop displayChairs={chairInfo} chairInfo={chairInfo}  setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
        </div>
    )
}

