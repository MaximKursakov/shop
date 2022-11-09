import { Link } from "react-router-dom";
import { Rooms } from "./Rooms";
import { Slider } from "./Slider";
import { motion } from "framer-motion";

export function Home ({chairInfo}) {
    let ch20 = chairInfo[0]
    let ch23 = chairInfo[1]
    return(
        <div className="home">
            
            <div className="hero">
                <Link className="hero-chair-link" to={`/shop/Chairs/${ch20.title}`}  state={{ch20}}><img src="/shop/images/ch23-seite.png" className="hero-img" alt="ch23 chair"></img></Link>
                <div className="hero-mid">
                    <h2>COLLECTION</h2>
                    <h1>NAME</h1>
                    <p>Some Title Text that describes the collection</p>
                    <Link to="/shop/Chairs"><motion.button whileHover={{scale: 1.1}} className="shop-link">Shop now</motion.button></Link>
                </div>
                <Link className="hero-chair-link" to={`/shop/Chairs/${ch23.title}`} state={{ch23}}><img src="/shop/images/ch26-seite.png" className="hero-img" alt="ch26 chair"></img></Link>
            </div>
            <Rooms></Rooms>
            <div className="slider-section">
                <div className="featured-header">
                    <h1>FEATURED PRODUCTS</h1>
                    <Link to={"/shop/Chairs"}>SEE ALL</Link>
                </div>
                <Slider chairInfo={chairInfo}></Slider>
            </div>
            
        </div>
    )
}