import axios from "axios"

export const addTracksToPlaylist = async (playlist_id, accesToken, selectedTracks) => {
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