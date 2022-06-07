import UserService from "../services/UserService"

function AddUser(){

    function addUser(e){
        e.preventDefault()
        let formData = new FormData(e.target)
        let username = formData.get("username")
        UserService.registerUser(username)
    }

    return (
        <form onSubmit={addUser} method="POST">
            <input type="text" name="username" id="username" placeholder="username" />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser