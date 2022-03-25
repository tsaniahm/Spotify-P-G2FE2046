import React, { useEffect } from "react";
import './styles/style.css';
import data from "./albumData/albumDummy";
import AlbumList from "./components/album/albumList";
import CreatePlaylist from "./components/playlist/createPlaylist";

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>
      <CreatePlaylist />
      <AlbumList value={data} />
    </React.Fragment>
  );
}

export default App;
