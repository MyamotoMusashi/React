import React from "react";
import UserService from "../services/UserService"

function ListUsers(){
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        async function getUsers() {
            const users = await UserService.getAllUsers();
            setUsers(users);
            console.log(users)
        }
        getUsers()
    }, [])
 
    return <>
        {users.map(user => <p><a href="#">{user.name}</a></p>)}
    </>
}

export default ListUsers