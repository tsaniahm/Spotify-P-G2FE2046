import { Button } from "@mui/material";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addAccessToken } from "../../redux/acessTokenSlice";
import { useStyleLandingPage } from "../../styles/styles";

const {
    REACT_APP_SPOTIFY_KEY,
    REACT_APP_AUTHORIZE_ENDPOINT,
    REACT_APP_VERCEL_URL
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
    console.log("ini split")
    console.log(splitResult)
    return splitResult;
};

const Login = () => {
    const style = useStyleLandingPage()

    const dispatch = useDispatch()
    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        if (window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getParamsFromAuth(window.location.hash);

            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
            localStorage.setItem("accessToken", access_token);

            dispatch(addAccessToken(access_token))
            toast.success('Successfully Login!')
            
        }

    }, [dispatch, accessToken]);

    const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_SPOTIFY_KEY}&redirect_uri=${REACT_APP_VERCEL_URL}&scope=${SCOPES}&response_type=token&show_dialog=true`;
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