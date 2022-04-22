import React, { useEffect, useState } from "react";

import { addAccessToken } from "../redux/acessTokenSlice"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Avatar, Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar/navbar";

import { getDataUser } from "api/getCurrentUser";

const ProfilePage = () => {

    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    const [curretUser, setCurrentUser] = useState([])
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        if (accesToken) {
            const getUser = async () => {
                const getUserData = await getDataUser(accesToken);
                if (getUserData.data.images.length > 0) {
                    setProfileImage(getUserData.data.images[0].url)
                }
                setCurrentUser(getUserData.data)
            }
            getUser()
        }
    }, [accesToken])

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
                sx={{ minHeight: '600px' }}
            >
                <Typography variant="h4" sx={{ marginBottom: '20px', color: 'white', fontWeight: 'bold' }} data_testid='title-profile'>PROFILE</Typography>
                <Avatar
                    alt="Remy Sharp"
                    src={profileImage}
                    sx={{ width: 200, height: 200 }}
                />
                <Typography variant="h2" sx={{ marginTop: '20px', color: 'white' }}>{curretUser.display_name}</Typography>
            </Grid>

        </React.Fragment>
    )
}

export default ProfilePage;