import React, { useEffect } from "react";
import './styles/style.css';
import data from "./albumData/albumDummy";

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>

      <div className="song-container">
        <img src={data.album.images[0].url} alt="#" />
        <h3 className="title">{data.album.name}</h3>
        <p className="artist">{data.artists[0].name}</p>
        <p className="album">
          {data.album.name}
        </p>
        <p className="year"> {data.album.release_date.slice(0, 4)}</p>
        <button className="button-play">Select</button>
      </div>

      <div className="playlist-container">
        <h1>CREATE PLAYLIST</h1>
        <img src="images/spotify.png" alt="#" />
        <form>
          <label className="form-label" htmlFor="playlist-title">Playlist Title*</label>
          <br />
          <input
            type="text"
            className="input-title"
            id="playlist-title"
            defaultValue=""
            placeholder="Input your playlist title"
          />
          <br />
          <label className="form-label" htmlFor="playlist-desc">Description*</label>
          <br />
          <textarea
            type="text"
            className="input-desc"
            id="playlist-desc"
            defaultValue=""
            placeholder="Input the description"
          ></textarea>
          <input id="submit" className="submit-button" type="button" defaultValue="CREATE" />
        </form>
      </div>
      
    </React.Fragment>
  );
}

export default App;
