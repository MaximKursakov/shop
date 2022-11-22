import { fireEvent, render, screen } from "@testing-library/react"
import { useState } from "react"
import {BrowserRouter} from "react-router-dom"
import {Cart} from "../Cart"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"

const MockCart = ({Basket, setBasket}) => {
    return(
        <BrowserRouter>
            <Cart Basket={Basket} setBasket={setBasket}/>
        </BrowserRouter>
    )
}

it("Total Price is Displayed",  () => {
    render(
        <MockCart 
            Basket={
                [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0}]
            }
            setBasket={() => {}}
        />
    );
    const element = screen.getByTestId("total-price-display")
    expect(element.textContent).toBe("220€")
})

it("Discount considered for total price + with multiple items",  () => {
    render(
        <MockCart 
            Basket={
                [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20},
                {title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0}]
            }
            setBasket={() => {}}
        />
    );
    const element = screen.getByTestId("total-price-display")
    expect(element.textContent).toBe("476€")
})

it("Quantity counter is updated correctly", () => {
    render(
        <MockCart 
            Basket={
                [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20},
                {title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0}]
            }
            setBasket={() => {}}
        />
    );
    const element =  screen.getByTestId("quantity-display")
    expect(element.textContent).toBe("2")
})


it("Items are bundled correctly by name", () => {
    render(
        <MockCart 
            Basket={
                [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20},
                {title: "ch23", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 2, featured: true, availability: 1, discount: 0},
                {title: "ch23", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 3, featured: true, availability: 1, discount: 0}]
            }
            setBasket={() => {}}
        />
    );
    const element =  screen.getAllByTestId("quantity-display")
    expect(element[0].textContent).toBe("1")
    expect(element[1].textContent).toBe("2")
})

// it("Items are bundled correctly by name", () => {
//     render(
//         <MockCart 
//             Basket={
//                 [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20},
//                 {title: "ch23", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0},
//                 {title: "ch23", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0}]
//             }
//             setBasket={() => {}}
//         />
//     )
//     const element =  screen.getAllByTestId("quantity-increase-display")[0]
//     fireEvent.click(element)
//     const quantity =  screen.getAllByTestId("quantity-display")
//     expect(element).toBe("2")
// })
