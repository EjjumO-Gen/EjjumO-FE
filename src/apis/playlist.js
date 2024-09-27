// playlist.js
import { Server } from "./axios.setting";

export const getPlaylistList = async ({
    setData
}) => {
    const response = await Server.get('playlist/list');
    setData(response.data);
};

// export const getPlaylistById = async ({playlistId, setData}) => {
//     const response = await Server.get(`playlist?id=${playlistId}`);
//     setData(response.data);

// }

export const getPlaylistById = async ({ playlistId, setData }) => {
    try {
        const response = await Server.get(`playlist?id=${playlistId}`);
        if (response.data) {
            setData(response.data);
        } else {
            console.error('No data returned for this playlist ID');
        }
    } catch (error) {
        console.error('Failed to fetch playlist details:', error.response ? error.response.data : error);
        throw error;
    }

};

export const updatePlaylistThumbs = async ({ playlistId, userId }) => {
    try {
        const response = await Server.patch(`playlist?id=${playlistId}&userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to update thumbs count:', error.response ? error.response.data : error);
        throw error;
    }
};

export const postPlaylist = async ({
    formData
}) => {
    const response = await Server.post('playlist', formData);
    return response.data;
};

export const deletePlaylist = async({ playlistId }) => {
    try {
        const response = await Server.delete(`playlist?id=${playlistId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to delete playlist: ', error.response ? error.response.data : error);
        throw error;
    }
}