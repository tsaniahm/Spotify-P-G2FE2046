import React from "react";

const CreatePlaylist = ({ handleCreatePlaylist, handleFormPlaylist }) => {
    return (
        <React.Fragment>
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
                <p className="form-p">*Before click "create", please select tracks first by using search input below</p>
                <button id="submit" className="submit-button" type="submit">CREATE</button>
            </form>
        </React.Fragment>
    )
}

export default CreatePlaylist;