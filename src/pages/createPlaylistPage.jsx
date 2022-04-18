import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { addAccessToken } from "../redux/acessTokenSlice";
import axios from "axios";
import '../styles/style.css';
import TrackListCard from "../components/tracks/trackListCard";
import CreatePlaylist from "../components/playlist/createPlaylist";
import Navbar from "../components/navbar/navbar";
import Logout from "../components/auth/logout";
import SearchForm from "../components/tracks/searchForm";
import { Grid } from "@mui/material";

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
            <Redirect to='/' />
        )
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

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

    const handleFormPlaylist = (e) => {
        setPlaylistName({
            ...playlistName,
            [e.target.name]: e.target.value
        })
    }

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
            <div className="form-playlist-container">
                <CreatePlaylist
                    handleCreatePlaylist={handleCreatePlaylist}
                    handleFormPlaylist={handleFormPlaylist}
                />
            </div>
            <div className="search-container">
                <SearchForm
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearch}
                />
            </div>
            <div className="search-result-container">
                {
                    selectedTracks.length > 0 &&
                    <>
                        <h3 className="result-font"> Selected Tracks</h3>
                        <Grid container spacing={2} sx={{ padding: '30px 40px' }}>
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
                        </Grid>
                    </>
                }
                {
                    searchResult.length > 0 &&
                    <>
                        <h3 className="result-font"> Search Result</h3>
                        <Grid container spacing={2} sx={{ padding: '30px 40px' }}>
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
                        </Grid>
                    </>
                }
            </div>
            {/* <div className="tracklist-table">
                <h1>Tracklist</h1>
                {
                    TracksData?.map((element) => <TrackListTable value={TracksData} key={element.id} />)
                }
            </div> */}
        </React.Fragment>
    );
}

export default CreatePlaylistPage;