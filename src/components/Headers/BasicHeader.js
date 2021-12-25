import { Link } from "react-router-dom"

function BasicHeader() {
    return (
        <>
            <li><Link to="/list-books">Books</Link></li>
            <li><a href="#">Shopping Card</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">Stores</a></li>
        </>
    )
}

export default BasicHeader