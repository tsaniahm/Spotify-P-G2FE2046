import React, { useEffect } from "react";

const { 
    REACT_APP_SPOTIFY_KEY,
    REACT_APP_AUTHORIZE_ENDPOINT,
    REACT_APP_REDIRECT_URL 
} = process.env

const SCOPES = "playlist-modify-private"

const getParamsFromAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const splitResult = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});
    return splitResult;
};


const Login = () => {

    useEffect(() => {
        if (window.location.hash) {
            const { 
                access_token,
                expires_in,
                token_type 
            } = getParamsFromAuth(window.location.hash);

            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }

    }, []);

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_SPOTIFY_KEY}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    };

    return (
        <React.Fragment>
            <h1>SPOTIFY</h1>
            <img src="images/spotify.png" alt="#" />
            <button className="login-button" onClick={handleLogin}>Login</button>
        </React.Fragment>
    )
}

export default Login;