import { Link } from "react-router-dom"

function AnnonymousHeader() {

    return (
        <>
            <li><Link to="login">Login</Link></li>
            <li><a href="/register">Register</a></li>
        </>
    )
}

export default AnnonymousHeader