import axios from "axios"

export const createPlaylist = async (accesToken, user_id, title, description) => {
    const url = `https://api.spotify.com/v1/users/${user_id}/playlists`
    try {
        const response = await axios.post(url, {
            name: title,
            public: false,
            collaborative: false,
            description: description,
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