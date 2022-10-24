import { Link } from "react-router-dom";

export function Home () {
    return(
        <div className="home">
            <div className="hero">
                <img src="/images/ch23.png" className="hero-img" alt="ch23 chair"></img>
                <div>
                    <h1>Some Title Text</h1>
                    <Link to="/Chairs">Shop now</Link>
                </div>
                <img src="images/ch26.png" className="hero-img" alt="ch26 chair"></img>
            </div>
        </div>
    )
}