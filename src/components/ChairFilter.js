import {useState} from "react"
import { ChairShop } from "./chairShop"
import { SortChairs } from "./SortChairs"

export function ChairFilter({chairInfo, setChairInfo, wishlist, setWishlist}) {
    const [filterState, setFilterState] = useState({office: false, dining: false, bedroom: false, })



    const officeChairs = chairInfo.filter(item => item.category === "office")
    const diningChairs = chairInfo.filter(item => item.category === "dining")
    const bedroomChairs = chairInfo.filter(item => item.category === "bedroom")


    return(
        <div>
            <button onClick={() => setFilterState(prevState => ({office: !prevState.office, dining: false, bedroom: false}))}>office</button>
            <button onClick={() => setFilterState(prevState => ({office: false, dining: !prevState.dining, bedroom: false}))}>dining</button>
            <button onClick={() => setFilterState(prevState => ({office: false, dining: false, bedroom: !prevState.bedroom}))}>bedroom</button>
            {filterState.office 
            && <ChairShop displayChairs={officeChairs} chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {filterState.dining 
            && <ChairShop displayChairs={diningChairs} chairInfo={chairInfo} setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {filterState.bedroom 
            && <ChairShop displayChairs={bedroomChairs} chairInfo={chairInfo}  setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
            {!filterState.office && !filterState.dining && !filterState.bedroom 
            &&  <ChairShop displayChairs={chairInfo} chairInfo={chairInfo}  setChairInfo={setChairInfo} wishlist={wishlist} setWishlist={setWishlist}></ChairShop>}
        </div>
    )
}

