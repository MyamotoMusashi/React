import React from 'react';
import { Link } from 'react-router-dom';

import UserHeader from './UserHeader';
import BasicHeader from './BasicHeader';
import AdminHeader from './AdminHeader';
import EmployeeHeader from './EmployeeHeader';
import AnnonymousHeader from './AnnonymousHeader';

function Header(props) {
    let username = props.username
    let header = null

    if (username === "pesho") {
        header = <UserHeader username={username} />
    }

    if (username === null) {
        header = <AnnonymousHeader />
    }

    if (username === "admin") {
        header = <AdminHeader username={username} />
    }

    if (username === "gosho") {
        header = <EmployeeHeader username={username} />
    }

    return (
        <>
            <div id="templatemo_menu">
                <ul>
                    {header}
                    <BasicHeader />
                </ul>
            </div>
            <div id="templatemo_header">
                <div id="templatemo_special_offers">
                    <p>
                        <span>25%</span> discounts for
                        purchase over $80
                    </p>
                    <a href="subpage.html" style={{marginLeft: 50}}>Read more...</a>
                </div>


                <div id="templatemo_new_books">
                    <ul>
                        <li>Suspen disse</li>
                        <li>Maece nas metus</li>
                        <li>In sed risus ac feli</li>
                    </ul>
                    <a href="subpage.html" style={{marginLeft: 50}}>Read more...</a>
                </div>
            </div>
        </>

    )
}

export default Header