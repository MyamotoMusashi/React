import UserService from "../services/UserService"
import { useHistory } from "react-router-dom";

function Logout(props) {
    const history = useHistory();

    props.onLogout()
    UserService.setCurrentUser(null)
    history.push("/")
    
    return null
}

export default Logout;