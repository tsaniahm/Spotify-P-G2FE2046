import { useDispatch } from "react-redux";
import { addAccessToken } from "../../redux/acessTokenSlice";

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(addAccessToken(localStorage.removeItem("accessToken")))
    }

    return (
        <>
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        </>
    )
}

export default Logout;