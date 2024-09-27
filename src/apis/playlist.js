// playlist.js
import { Server } from "./axios.setting";

export const getPlaylistList = async ({
    setData
}) => {
    const response = await Server.get('playlist/list');
    setData(response.data);
}

export const getPlaylistById = async ({
    playlistId, setData
}) => {
    const response = await Server.get(`playlist?id=${playlistId}`);
    setData(response.data);

}

export const updatePlaylistThumbs = async ({ playlistId, userId }) => {
    try {
        const response = await Server.patch(`playlist?id=${playlistId}&userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to update thumbs count:', error.response ? error.response.data : error);
        throw error;
    }
};