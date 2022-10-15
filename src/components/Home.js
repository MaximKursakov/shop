import { Link } from "react-router-dom";

export function Home () {
    return(
        <div>
            <h1>Some Title Text</h1>
            <Link to="/Chairs">Shop now</Link>
        </div>
    )
}