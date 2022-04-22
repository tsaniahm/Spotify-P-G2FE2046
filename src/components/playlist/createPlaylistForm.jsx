import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { useStyleCreatePlaylist } from "../../styles/styles";
import CloseIcon from '@mui/icons-material/Close';


const CreatePlaylistForm = ({ handleCreatePlaylist, handleFormPlaylist, handleClose }) => {
    const style = useStyleCreatePlaylist()

    return (
        <React.Fragment>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: '100%' }}
            >
                <Box className={style.box} >
                    <IconButton aria-label="close" onClick={handleClose} sx={{ color: 'white' }}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h4" className={style.title}>CREATE PLAYLIST</Typography>
                    <form onSubmit={handleCreatePlaylist}>
                        <label className="form-label" htmlFor="playlist-title">Playlist Title*</label>
                        <br />
                        <input
                            type="text"
                            className="input-title"
                            id="playlist-title"
                            defaultValue=""
                            name="title"
                            placeholder="Input your playlist title"
                            minLength={10}
                            onChange={handleFormPlaylist}
                            required
                        />
                        <br />
                        <label className="form-label" htmlFor="playlist-desc">Description*</label>
                        <br />
                        <textarea
                            type="text"
                            className="input-desc"
                            id="playlist-desc"
                            defaultValue=""
                            name="desc"
                            placeholder="Input the description"
                            onChange={handleFormPlaylist}
                        ></textarea>
                        <button id="submit" className="submit-button" type="submit">CREATE</button>
                    </form>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default CreatePlaylistForm;