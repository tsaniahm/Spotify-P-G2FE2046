import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { addAccessToken } from "../redux/acessTokenSlice";
import Login from "../components/auth/login";
import Navbar from "../components/navbar/navbar";
import { Typography } from "@mui/material";
import { useStyleHomepage } from "../styles/styles";

const Homepage = () => {
    const style = useStyleHomepage()

    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    if (localToken && !accesToken) {
        dispatch(addAccessToken(localToken))
    }

    if (accesToken) {
        return (
            <Redirect to='/create-playlist' />
        )
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="login-container">
                <Typography variant="h1" className={style.h1}>Create & Manage your Spotify Playlist</Typography>
                <Typography variant="p" className={style.p}>Create your own playlist. Log in to create new playlist and manage your Spotify account.</Typography>
                <Login />
            </div>
        </React.Fragment>
    )
}

export default Homepage;