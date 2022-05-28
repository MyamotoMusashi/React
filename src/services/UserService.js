import User from '../entities/User'

let users = []
let currentUser = null;

export function getCurrentUser() {
    return currentUser;
}

export function setCurrentUser(user) {
    currentUser = user;
}

export async function registerUser(username) {
    let user = new User(username)

    await fetch('/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export async function getAllUsers() {
    const users = await(await fetch('/users')).json()
    return users
}

const UserService = {
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser,
    registerUser: registerUser,
    getAllUsers: getAllUsers,
}

export default UserService
