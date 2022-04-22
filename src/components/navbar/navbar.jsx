import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useStylesNavbar } from "../../styles/styles";
import { Link } from "react-router-dom";
import Logout from "../auth/logout";
import { useSelector } from "react-redux";
import { getDataUser } from "api/getCurrentUser";

const Navbar = () => {
    const style = useStylesNavbar();
    const accesToken = useSelector((state) => state.accessToken.value);
    const ref = React.createRef();

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [profileImage, setProfileImage] = useState('');

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);

    };

    useEffect(() =>{
        if(accesToken){
            const getUser = async () =>{
                const getUserData =  await getDataUser(accesToken);
                if(getUserData.data.images.length > 0){
                    setProfileImage(getUserData.data.images[0].url)
                }
            }
            getUser()
        }
    },[accesToken])


    return (
        <AppBar position="static">
            <Toolbar className={style.toolBar}>
                <Toolbar className={style.toolBar}>
                    <img src="images/spotify.png" alt="#" className={style.logo} />
                    <Typography
                        variant="h4"
                        component="h4"
                        className={style.typography}
                        fontWeight="bold"
                        marginLeft='10px'
                    >
                        Spotify
                    </Typography>
                </Toolbar>
                {accesToken &&
                    <Box>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} ref={ref}>
                            <Avatar alt="Remy Sharp" src={profileImage} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Link to="/create-playlist">
                                <MenuItem>Dashboard</MenuItem>
                            </Link>
                            <Link to="/Profile">
                                <MenuItem>Profile</MenuItem>
                            </Link>
                            <MenuItem>
                                <Logout />
                            </MenuItem>
                        </Menu>
                    </Box>
                }

            </Toolbar>
        </AppBar>
    )

}

export default Navbar;