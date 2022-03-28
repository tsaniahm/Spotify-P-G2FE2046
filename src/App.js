import React, { useEffect } from "react";
import './styles/style.css';
import TracksData from "./tracksData/tracksDummy";
import TrackListCard from "./components/tracks/trackListCard";
import CreatePlaylist from "./components/playlist/createPlaylist";
import TrackListTable from "./components/tracks/trackListTable";

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>
      <CreatePlaylist />
      <div className="tracklist-table">
        <h1>Tracklist</h1>
        <TrackListTable value={TracksData}/>
      </div>
      <div className="albums-container">
        {
          TracksData.map((element) => <TrackListCard value={element} key={element.id} />)
        }
      </div>
    </React.Fragment>
  );
}

export default App;
