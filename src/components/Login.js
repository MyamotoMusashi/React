import UserService from "../services/UserService"
import { useHistory } from "react-router-dom";

function Login(props) {
    const history = useHistory();
    console.log(props)

    function login(e){
        e.preventDefault()
        let formData = new FormData(e.target)
        let username = formData.get("username")
        UserService.setCurrentUser(username)
        history.push("/")
        props.onLogin()
    }

    return (
        <form onSubmit={login} method="POST">
            <input type="text" name="username" id="username" placeholder="username" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;