let users = []
let currentUser = null;

export function getCurrentUser(){
    return currentUser;
}

export function setCurrentUser(user){
    currentUser = user;
}

const UserService = {
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser
}

export default UserService
