import UserService from "../services/UserService"
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    
    function register(e){
        e.preventDefault()
        let formData = new FormData(e.target)
        let username = formData.get("username")
        UserService.registerUser(username)
        history.push("/login")
    }

    return (
        <form onSubmit={register} method="POST">
            <input type="text" name="username" id="username" placeholder="username" />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;