import { Link } from "react-router-dom";

export function Home () {
    return(
        <div>
            <h1>Some Title Text</h1>
            <Link to="/Shop">Shop now</Link>
        </div>
    )
}