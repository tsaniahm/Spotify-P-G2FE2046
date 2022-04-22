import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAccessToken } from "../../redux/acessTokenSlice";

const Logout = () => {
    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);

    const handleLogout = () => {
        dispatch(addAccessToken(localStorage.removeItem("accessToken")))
    }

    if (!accesToken) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <>
            <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        </>
    )
}

export default Logout;