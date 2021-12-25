import User from '../entities/User'

let users = []
let currentUser = null;

export function getCurrentUser(){
    return currentUser;
}

export function setCurrentUser(user){
    currentUser = user;
}

export function registerUser(username){
    users.push(new User(username))
    console.log(getAllUsers())
}

export function getAllUsers(){
    return users
}

const UserService = {
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser,
    registerUser: registerUser,
    getAllUsers: getAllUsers,
}

export default UserService
