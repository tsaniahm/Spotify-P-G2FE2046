import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/style.css';
import TracksData from "../tracksData/tracksDummy";
import TrackListCard from "../components/tracks/trackListCard";
import TrackListTable from "../components/tracks/trackListTable";
import Login from "../components/auth/login";
import { useSearchResult } from "../context/selectedTrackContext";

const Index = () => {

    const [accesToken, setAcessToken] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const { selectedTracks } = useSearchResult()


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
            {/* End Homework Module 3 Session 1 */}

            {/* Homework Module 3 Session 2 */}
            <div className="search-result-container">
                {
                    selectedTracks.length > 0 &&
                    <>
                        <h3 className="result-font"> Selected Tracks</h3>
                        <div className="tracks-container">
                            {selectedTracks.map((element) => <TrackListCard value={element} key={element.id} />)}
                        </div>
                    </>
                }
                {
                    searchResult.length > 0 &&
                    <>
                        <h3 className="result-font"> Search Result</h3>
                        <div className="tracks-container">
                            {searchResult.map((element) => <TrackListCard value={element} key={element.id} />)}
                        </div>
                    </>
                }
            </div>
            {/*End Homework Module 3 Session 2 */}

            <div className="tracklist-table">
                <h1>Tracklist</h1>
                <TrackListTable value={TracksData} />
            </div>
        </React.Fragment>
    );
}

export default Index;