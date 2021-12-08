import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    let username = props.username
    let header = null

    if (username === "pesho"){
        header =   <header>
        <nav>
            <li><Link to="/login">Hello {username}</Link></li>
            <li><Link to="/list-books">List Books</Link></li>
            <li><a href="/register">Register</a></li>
            <li><Link to="/add-book">Add book</Link></li>
            <li><a href="#">Order book</a></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><a href="#">Admin</a></li>
            <li><a href="#">Shopping Card</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">Add Category</a></li>
            <li><a href="#">Add Author</a></li>
            <li><a href="#">Employees</a></li>
            <li><a href="#">Add Employee</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Add Store</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Add User</a></li>
            <li><a href="#">Add Admin</a></li>
            <li><a href="#">Admins</a></li>
        </nav>
    </header>
    }
    else {
        header = <header>
        <nav>
            <li><Link to="/login">Hello {username}</Link></li>
            <li><Link to="/list-books">List Books</Link></li>
            <li><a href="/register">Register</a></li>
            <li><a href="#">Order book</a></li>
            <li><a href="#">Shopping Card</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Authors</a></li>
        </nav>
    </header>
    }
    return (
      header
    )
}

export default Header