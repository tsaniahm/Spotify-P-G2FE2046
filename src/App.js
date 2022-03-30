import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/style.css';
import TracksData from "./tracksData/tracksDummy";
import TrackListCard from "./components/tracks/trackListCard";
import TrackListTable from "./components/tracks/trackListTable";
import Login from "./components/auth/login";
import SearchTrackListTable from "./components/tracks/searchTrackListTable";


function App() {

  const [accesToken, setAcessToken] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      setAcessToken(token)
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = async () => {
    console.log(accesToken)
    const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accesToken}`
        },
      });

      setSearchResult(response.data.tracks.items)
      setIsSubmit(true)

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <React.Fragment>
      
      {/* Homework Module 3 Session 1 */}
      <div className="login-container">
        <Login />
      </div>
      <div className="search-container">
        <h1>SEARCH PAGE</h1>
        <div className="search-section">
          <input type={'text'} placeholder={'Search Here'} onChange={handleInputChange}></input>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="search-tracklist-container">
        <SearchTrackListTable value={searchResult} input={searchInput} isSubmit={isSubmit} />
      </div>
      {/* End Homework Module 3 Session 1 */}

      <div className="albums-container">
        {
          TracksData.map((element) => <TrackListCard value={element} key={element.id} />)
        }
      </div>
      <div className="tracklist-table">
        <h1>Tracklist</h1>
        <TrackListTable value={TracksData} />
      </div>
    </React.Fragment>
  );
}

export default App;
