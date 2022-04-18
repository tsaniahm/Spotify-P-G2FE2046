import React, { useState } from "react";
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useStylesNavbar } from "../../styles/styles";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const style = useStylesNavbar();
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);

    };


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
                <Box>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="images/album.jpg" />
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
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;