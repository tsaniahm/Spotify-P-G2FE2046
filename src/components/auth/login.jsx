import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAccessToken } from "../../redux/acessTokenSlice";
import { useStyleHomepage } from "../../styles/styles";

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

const TokenExpired = (dispatch, time) => {
    setTimeout(() => {
        dispatch(addAccessToken(localStorage.removeItem("accessToken")))
    }, time)
}


const Login = () => {
    const style = useStyleHomepage()
    const dispatch = useDispatch()
    const accessToken = localStorage.getItem("accessToken")
    const expiresIn = localStorage.getItem("expiresIn")
    TokenExpired(dispatch, expiresIn * 1000)

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
            dispatch(addAccessToken(accessToken))
        }

    }, [dispatch, accessToken]);

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_SPOTIFY_KEY}&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    };

    return (
        <React.Fragment>
            <Button
                size="medium"
                variant="contained"
                className={style.button}
                onClick={handleLogin}
            >
                Login
            </Button>
        </React.Fragment>
    )
}

export default Login;