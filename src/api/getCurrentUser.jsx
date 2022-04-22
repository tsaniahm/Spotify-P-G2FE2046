import axios from "axios";

export const getUser = async (accesToken) => {
    const url = `https://api.spotify.com/v1/me`;
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${accesToken}`
            },
        });
        
        return response
    } catch (error) {
        console.error(error);
    }
}