import {useState} from "react"
import { ChairShop } from "./chairShop"
import { SortChairs } from "./SortChairs"

export function ChairFilter({displayChairs, chairInfo, setChairInfo, wishlist, setWishlist}) {
    const [filterState, setFilterState] = useState({bar: false, dining: false, livingroom: false, })

    const [order, setOrder] = useState({priceLH: false, priceHL: false, nameAZ: false, nameZA: false})

    function changeOrder(e) {
        const orderValue = e.target.value
        if (orderValue === "priceLH") {
            setOrder({priceLH: true, priceHL: false, nameAZ: false, nameZA: false})
        }
        if (orderValue === "priceHL") {
            setOrder({priceLH: false, priceHL: true, nameAZ: false, nameZA: false})
        }
        if (orderValue === "nameAZ") {
            setOrder({priceLH: false, priceHL: false, nameAZ: true, nameZA: false})
        }
        if (orderValue === "nameZA") {
            setOrder({priceLH: false, priceHL: false, nameAZ: false, nameZA: true})
        }
    }

    if(order.priceLH) {
        displayChairs = [...displayChairs].sort((a, b) => a.price - b.price)
    }
    else if(order.priceHL) {
        displayChairs = [...displayChairs].sort((a, b) => b.price - a.price)
    }
    else if(order.nameAZ) {
        displayChairs = [...displayChairs].sort((a, b) => a.title > b.title ? 1 : -1,)
    }
    else if(order.nameZA) {
        displayChairs = [...displayChairs].sort((a, b) => a.title < b.title ? 1 : -1,)
    }


    const barChairs = chairInfo.filter(item => item.category === "bar")
    const diningChairs = chairInfo.filter(item => item.category === "dining")
    const livingChairs = chairInfo.filter(item => item.category === "living")


    return(
        <div className="chair-filter">
            <div className="shop-header">
                <span></span>
                <p>Shop</p>
            </div>
            <SortChairs displayChairs={displayChairs} order={order} setOrder={setOrder} changeOrder={changeOrder}></SortChairs>
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

