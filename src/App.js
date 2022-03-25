import React, {useEffect} from "react";

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>
      <h1>Set Up a Spotify API key (Client ID)</h1>
    </React.Fragment>
  );
}

export default App;
