import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { addAccessToken } from "../redux/acessTokenSlice";

const ProfilePage = () => {

    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    if (localToken && !accesToken) {
        dispatch(addAccessToken(localToken))
    }

    if (!accesToken) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <React.Fragment>
            <Navbar />
            <Grid
                container
                display='flex'
                direction='column'
                justifyContent='center'
                alignItems='center'
                sx={{minHeight: '600px'}}
            >
                <Avatar
                    alt="Remy Sharp"
                    src='images/album.jpg'
                    sx={{ width: 200, height: 200 }}
                />
                <Typography  variant="h2" sx={{marginTop: '20px', color: 'white'}}>Display Name</Typography>
                <Typography variant="h6" sx={{color: 'white'}}>Followers: </Typography>
            </Grid>

        </React.Fragment>
    )
}

export default ProfilePage;