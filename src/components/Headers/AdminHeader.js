import { Link } from "react-router-dom"
import UserHeader from "./UserHeader"

function AdminHeader(props) {
    let username = props.username

    return (
        <>
            <UserHeader username={username} />
            <li><Link to="/add-book">Add book</Link></li>
            <li><a href="/">Books</a></li>
            <li><Link to="/orders?status=notProcessed">Orders</Link></li>
            <li><a href="#">Admin</a></li>
            <li>
                <Link to="/add-category">Add Category</Link>
            </li>
            <li><a href="#">Add Author</a></li>
            <li><a href="#">Employees</a></li>
            <li><a href="#">Add Employee</a></li>
            <li><a href="#">Add Store</a></li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li><a href="/add-user">Add User</a></li>
            <li><a href="#">Add Admin</a></li>
            <li><a href="#">Admins</a></li>
        </>
    )
}

export default AdminHeader