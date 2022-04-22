import axios from "axios";


export const getSearchData = async (accesToken : string, searchInput: string)=> {

    const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accesToken}`
            },
        });

        return response.data.tracks.items

    } catch (error) {
        console.error(error);
    }
}
