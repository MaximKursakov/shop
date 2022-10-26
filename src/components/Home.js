import { Link } from "react-router-dom";
import { Slider } from "./Slider";

export function Home ({chairInfo}) {
    return(
        <div className="home">
            <Slider chairInfo={chairInfo}></Slider>
            <div className="hero">
                <img src="/images/ch23-seite.png" className="hero-img" alt="ch23 chair"></img>
                <div className="hero-mid">
                    <h2>COLLECTION</h2>
                    <h1>NAME</h1>
                    <p>Some Title Text that describes the company</p>
                    <Link to="/Chairs"><button className="shop-link">Shop now</button></Link>
                </div>
                <img src="images/ch26-seite.png" className="hero-img" alt="ch26 chair"></img>
            </div>
            
        </div>
    )
}