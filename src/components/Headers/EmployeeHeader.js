import { Link } from "react-router-dom"
import UserHeader from "./UserHeader"

function EmployeeHeader(props) {
    let username = props.username

    return (
        <>
            <UserHeader username={username}/>
            <li><Link to="/add-book">Add book</Link></li>
            <li><Link to="/orders?status=notProcessed">Orders</Link></li>
            <li><a href="#">Add Category</a></li>
            <li><a href="#">Add Author</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Add User</a></li>
        </>
    )
}

export default EmployeeHeader