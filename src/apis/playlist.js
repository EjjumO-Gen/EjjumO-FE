// playlist.js
import { Server } from "./axios.setting";

export const getPlaylistList = async ({
    setData
}) => {
    const response = await Server.get('playlist/list');
    setData(response.data);
}

export const getPlaylistById = async ({playlistId, setData}) => {
    const response = await Server.get(`playlist?id=${playlistId}`);
    setData(response.data);

}