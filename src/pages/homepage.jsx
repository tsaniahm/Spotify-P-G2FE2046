import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Login from "../components/auth/login";
import Navbar from "../components/navbar/navbar";
import { addAccessToken } from "../redux/acessTokenSlice";

const Homepage = () => {
    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    if(localToken && !accesToken){
        dispatch(addAccessToken(localToken))
    }

    if(accesToken) {
        return (
            <Redirect to='/create-playlist'></Redirect>
        )
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="login-container">
                <div className="login-header-text">
                    <h1>Create & manage your Spotify Playlist</h1>
                    <p>Create your own playlist. Log in to create new playlistand manage your Spotify account. </p>
                </div>
                <Login />
            </div>
        </React.Fragment>
    )
}

export default Homepage;