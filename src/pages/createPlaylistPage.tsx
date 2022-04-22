import React, { Suspense, useState } from "react";
import { Redirect } from "react-router-dom";

import { SelectedTrack, Track } from "interface/interface";
import TracksData from "../tracksData/tracksDummy";

import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { addAccessToken } from "../redux/acessTokenSlice";
import { AppDispatch, RootState } from "../redux/store";

import TrackListCard from "../components/tracks/trackListCard";
import SearchForm from "../components/search/searchForm";
import Navbar from "../components/navbar/navbar";

import { Button, Grid, Typography, useMediaQuery, Dialog } from "@mui/material";
import { useStyleSearchInput } from "../styles/styles";
import toast, { Toaster } from 'react-hot-toast';
import { Add } from "@mui/icons-material";
import '../styles/style.css';

import { addTracksToPlaylist } from "../api/postTracksToPlaylist";
import { createPlaylist } from "../api/postCreatePlaylist";
import { getSearchData } from "../api/getSearchData";
import { getUser } from "../api/getCurrentUser";

const CreatePlaylistForm = React.lazy(() => import('../components/playlist/createPlaylistForm'));

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const CreatePlaylistPage = () => {
    const style = useStyleSearchInput()
    const matches = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch()
    const accesToken = useAppSelector((state: RootState) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    const [searchResult, setSearchResult] = useState<Track[]>([])
    const [searchInput, setSearchInput] = useState<string>('')
    const [selectedTracks, setSelectedTracks] = useState<SelectedTrack[]>([])
    const [open, setOpen] = useState<boolean>(false)
    const [playlistName, setPlaylistName] = useState({
        title: '',
        description: ''
    })

    if (localToken && !accesToken) {
        dispatch(addAccessToken(localToken))
    }

    const handleInputChange = (e: any) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = async () => {
        const data = await getSearchData(accesToken, searchInput)
        setSearchResult(data)
    }

    const handleFormPlaylist = (e: any) => {
        setPlaylistName({
            ...playlistName,
            [e.target.name]: e.target.value
        })
    }

    const handleCreatePlaylist = async (e: any) => {
        e.preventDefault()
        const user_id = await getUser(accesToken)
        const playlist_id = await createPlaylist(accesToken, user_id, playlistName.title, playlistName.description)

        if (playlist_id) {
            const response = await addTracksToPlaylist(playlist_id, accesToken, selectedTracks)
            if (response) {
                setPlaylistName({
                    title: '',
                    description: '',
                })
                setSelectedTracks([])
                setSearchResult([])
                toast.success('Successfully created!');
                setOpen(false)
            } else {
                toast.error("Failed to Create.")
            }
        }
    }

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => setOpen(true);
    const handleClose = (event: React.MouseEvent<HTMLElement>) => setOpen(false);

    if (!accesToken) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <React.Fragment>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Grid
                container
                sx={{ padding: '30px 40px' }}
            >
                <Typography
                    variant={matches ? 'subtitle2' : 'subtitle1'}
                    className={style.subtitle}
                >
                    Lets find song or episode for your playlist
                </Typography>
                <SearchForm
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearch}
                />
            </Grid>
            {
                selectedTracks.length > 0 &&
                <>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems='center'
                        sx={{ padding: '30px 40px 0px 40px' }}
                    >
                        <Typography variant="h6" sx={{ color: 'white' }}>Selected Tracks</Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={(e) => handleOpen(e)}
                            className={style.createButton}
                            startIcon={<Add />}
                        >
                            {!matches && 'Create Playlist'}
                        </Button>
                    </Grid>
                    <Grid container spacing={2} sx={{ padding: '30px 40px' }}>
                        {
                            selectedTracks.map((element) =>
                                <TrackListCard
                                    value={element}
                                    imageUrl={element.album.images[0].url}
                                    title={element.name}
                                    singer={element.artists[0].name}
                                    duration={element.duration_ms}
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
                searchResult.length > 0 ?
                    <>
                        <Typography variant="h6" sx={{ color: 'white', marginLeft: '40px' }}>Search Result</Typography>
                        <Grid container spacing={2} sx={{ padding: '30px 40px' }}>
                            {
                                searchResult.map((element) =>
                                    <TrackListCard
                                        value={element}
                                        imageUrl={element.album.images[0].url}
                                        title={element.name}
                                        singer={element.artists[0].name}
                                        duration={element.duration_ms}
                                        key={element.id}
                                        selectedTracks={selectedTracks}
                                        setSelectedTracks={setSelectedTracks}
                                    />
                                )
                            }
                        </Grid>
                    </>
                    :
                    <Grid container spacing={2} sx={{ padding: '30px 40px' }}>
                        {
                            TracksData.map((element) =>
                                <TrackListCard
                                    value={element}
                                    imageUrl={element.album.images[0].url}
                                    title={element.name}
                                    singer={element.artists[0].name}
                                    duration={element.duration_ms}
                                    key={element.id}
                                    selectedTracks={selectedTracks}
                                    setSelectedTracks={setSelectedTracks}
                                />
                            )
                        }
                    </Grid>
            }

            <Dialog
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                fullWidth={true}
                fullScreen={matches && true}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <CreatePlaylistForm
                        handleCreatePlaylist={handleCreatePlaylist}
                        handleFormPlaylist={handleFormPlaylist}
                        handleClose={handleClose}
                    />
                </Suspense>

            </Dialog>
        </React.Fragment>
    );
}

export default CreatePlaylistPage;