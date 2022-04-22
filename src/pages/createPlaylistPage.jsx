import React, { Suspense, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { addAccessToken } from "../redux/acessTokenSlice";
import '../styles/style.css';
import TrackListCard from "../components/tracks/trackListCard.tsx";
import Navbar from "../components/navbar/navbar";
import SearchForm from "../components/search/searchForm";
import { Button, Grid, Modal, Typography, useMediaQuery } from "@mui/material";
import { useStyleSearchInput } from "../styles/styles";
import { Add } from "@mui/icons-material";
import { getSearchData } from "../api/getSearchData";
import { getUser } from "../api/getCurrentUser";
import { createPlaylist } from "../api/postCreatePlaylist";
import { addTracksToPlaylist } from "../api/postTracksToPlaylist";
import TracksData from "../tracksData/tracksDummy";
import toast, { Toaster } from 'react-hot-toast';

const CreatePlaylistForm = React.lazy(() => import('../components/playlist/createPlaylistForm'));

const CreatePlaylistPage = () => {
    const style = useStyleSearchInput()
    const matches = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch()
    const accesToken = useSelector((state) => state.accessToken.value);
    const localToken = localStorage.getItem("accessToken");

    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [selectedTracks, setSelectedTracks] = useState([])
    const [open, setOpen] = useState(false)
    const [playlistName, setPlaylistName] = useState({
        title: '',
        description: ''
    })
    const ref = React.createRef();

    if (localToken && !accesToken) {
        dispatch(addAccessToken(localToken))
    }


    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = async () => {
        const data = await getSearchData(accesToken, searchInput)
        setSearchResult(data)
    }

    const handleFormPlaylist = (e) => {
        setPlaylistName({
            ...playlistName,
            [e.target.name]: e.target.value
        })
    }


    const handleCreatePlaylist = async (e) => {
        e.preventDefault()
        const currentUser = await getUser(accesToken)
        const user_id = currentUser.data.id
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
            }else{
                toast.error("Failed to Create.")
            }
        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            className={style.createButton}
                            onClick={handleOpen}
                            ref={ref}
                            startIcon={<Add />}>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                ref={ref}

            >
                <Suspense fallback={<div>Loading...</div>}>
                    <CreatePlaylistForm
                        handleCreatePlaylist={handleCreatePlaylist}
                        handleFormPlaylist={handleFormPlaylist}
                        handleClose={handleClose}
                    />
                </Suspense>

            </Modal>
        </React.Fragment>
    );
}

export default CreatePlaylistPage;