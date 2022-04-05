import React from "react";

const CreatePlaylist = ({handleCreatePlaylist, handleFormPlaylist}) => {
    return (
        <div className="playlist-container">
            <h1>CREATE PLAYLIST</h1>
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
        </div>
    )
}

export default CreatePlaylist;