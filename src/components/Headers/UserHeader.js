import React from 'react';
import { Link } from 'react-router-dom';

function UserHeader(props) {
    let username = props.username
    let header = null

    return (
        <>
            <li><Link to="/login">Hello {username}</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </>
    )
}

export default UserHeader