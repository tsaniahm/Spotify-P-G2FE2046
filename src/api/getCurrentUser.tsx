import axios from "axios";
import { User } from "interface/interface";

export const getUser = async (accesToken: string) => {
    const url = `https://api.spotify.com/v1/me`;
    try {
        const response = await axios.get<User>(url, {
            headers: {
                Authorization: `Bearer ${accesToken}`
            },
        });
        
        return response.data.id
    } catch (error) {
        console.error(error);
    }
}

export const getDataUser = async (accesToken: string) => {
    const url = `https://api.spotify.com/v1/me`;
    try {
        const response = await axios.get<User>(url, {
            headers: {
                Authorization: `Bearer ${accesToken}`
            },
        });
        
        return response
    } catch (error) {
        console.error(error);
    }
}