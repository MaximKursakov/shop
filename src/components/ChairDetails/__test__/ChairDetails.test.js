// import { fireEvent, render, screen } from "@testing-library/react"
// import { useState } from "react"
// import {BrowserRouter} from "react-router-dom"
// import {ChairDetails} from "../chairDetails"
// import '@testing-library/jest-dom'
// import userEvent from "@testing-library/user-event"

// const MockChairDetails = ({Basket, setBasket}) => {
//     return(
//         <BrowserRouter>
//             <ChairDetails 
//             Basket={Basket}
//             setBasket={setBasket}
//             />
//         </BrowserRouter>
//     )
// }

// it("test",  () => {
//     render(
//         <MockChairDetails 
//             Basket={
//                 [{title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 220.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 20},
//                 {title: "ch20", thumbnailimg: "thumbnail1", description:"Lorem ipsum", price: 300.00, category: "dining", wishlist: false, id: 1, featured: true, availability: 1, discount: 0}]
//             }
//             setBasket={() => {}}
//         />
//     );
//     const element = screen.getByText(/Availability/i);
//     expect(element.textContent).toBe("Availability");
// })
