import React, { useState } from "react";
import axios from "axios";
import '../styles/style.css';
import TracksData from "../tracksData/tracksDummy";
import TrackListCard from "../components/tracks/trackListCard";
import TrackListTable from "../components/tracks/trackListTable";
import CreatePlaylist from "../components/playlist/createPlaylist";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/navbar";
import { Redirect } from "react-router-dom";
import { addAccessToken } from "../redux/acessTokenSlice";
import Logout from "../components/auth/logout";

const CreatePlaylistPage = () => {
    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [selectedTracks, setSelectedTracks] = useState([])
    const [playlistName, setPlaylistName] = useState({
        title: '',
        description: ''
    })
    const localToken = localStorage.getItem("accessToken");

    if (localToken && !accesToken) {
        dispatch(addAccessToken(localToken))
    }

    if (!accesToken) {
        return (
            <Redirect to='/'></Redirect>
        )
    }

    //function to handle search input
    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    //funtion to search
    const handleSearch = async () => {
        const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                },
            });

            setSearchResult(response.data.tracks.items)

        } catch (error) {
            console.error(error);
        }
    }

    //function to handle create palylist form change
    const handleFormPlaylist = (e) => {
        setPlaylistName({
            ...playlistName,
            [e.target.name]: e.target.value
        })
    }

    //funtion to handle get current user
    const getUser = async () => {
        const url = `https://api.spotify.com/v1/me`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                },
            });
            return response.data.id
        } catch (error) {
            console.error(error);
        }
    }

    //function to create playlist
    const createPlaylist = async (user_id) => {
        const url = `https://api.spotify.com/v1/users/${user_id}/playlists`
        try {
            const response = await axios.post(url, {
                name: playlistName.title,
                public: false,
                collaborative: false,
                description: playlistName.description,
            }, {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                },
            })
            return response.data.id
        } catch (error) {
            console.log(error)
        }
    }

    //function to add all the tracks we selected to playlist
    const addTracksToPlaylist = async (playlist_id) => {
        const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
        try {
            const response = await axios.post(url, {
                uris: selectedTracks.map((song) => song.uri)
            }, {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                },
            })
            return response
        } catch (error) {
            console.log(error)
        }
    }

    //function to create playlist
    const handleCreatePlaylist = async (e) => {
        e.preventDefault()
        const user_id = await getUser()
        const playlist_id = await createPlaylist(user_id)
        if (playlist_id) {
            const response = await addTracksToPlaylist(playlist_id)
            if (response) {
                setPlaylistName({
                    title: '',
                    description: '',
                })
                setSelectedTracks([])
                setSearchResult([])
                alert('Success to create playlist')
            }
        }
    }


    return (
        <React.Fragment>
            <Navbar />
            <div className="logout-container">
                <Logout />
            </div>

            <div className="playlist-container">
                <CreatePlaylist
                    handleCreatePlaylist={handleCreatePlaylist}
                    handleFormPlaylist={handleFormPlaylist}
                />
            </div>

            <div className="search-container">
                <div className="search-section">
                    <input type={'text'} placeholder={'Search Here'} onChange={handleInputChange}></input>
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="search-result-container">
                {
                    selectedTracks.length > 0 &&
                    <>
                        <h3 className="result-font"> Selected Tracks</h3>
                        <div className="tracks-container">
                            {
                                selectedTracks.map((element) =>
                                    <TrackListCard
                                        value={element}
                                        key={element.id}
                                        selectedTracks={selectedTracks}
                                        setSelectedTracks={setSelectedTracks}
                                    />
                                )
                            }
                        </div>
                    </>
                }
                {
                    searchResult.length > 0 &&
                    <>
                        <h3 className="result-font"> Search Result</h3>
                        <div className="tracks-container">
                            {
                                searchResult.map((element) =>
                                    <TrackListCard
                                        value={element}
                                        key={element.id}
                                        selectedTracks={selectedTracks}
                                        setSelectedTracks={setSelectedTracks}
                                    />
                                )
                            }
                        </div>
                    </>
                }
            </div>

            <div className="tracklist-table">
                <h1>Tracklist</h1>
                <TrackListTable value={TracksData} />
            </div>
        </React.Fragment>
    );
}

export default CreatePlaylistPage;