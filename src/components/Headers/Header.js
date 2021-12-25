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
        <header>
            <nav>
                {header}
                <BasicHeader/>
            </nav>
        </header>
    )
}

export default Header