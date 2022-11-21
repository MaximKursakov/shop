
import { BiChevronDown } from "react-icons/bi";
import "./SortChairs.css"

export function SortChairs({displayChairs, order, setOrder, changeOrder}) {
    


    return(
        <div className="select-styling">
            <select className="chair-sort" onChange={(e) => changeOrder(e)}>
                <option value="1">sort by</option>
                <option value="priceLH">price low to high</option>
                <option value="priceHL">price high to low</option>
                <option value="nameAZ">Name: A-Z</option>
                <option value="nameZA">Name: Z-A</option>
            </select>
            <span className="select-arrow"><BiChevronDown></BiChevronDown></span>
        </div>
    )
}