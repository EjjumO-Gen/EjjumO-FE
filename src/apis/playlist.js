import { Server } from "./axios.setting";

export const getPlaylistList = async ({
    setData
}) => {
    const response = await Server.get('playlist/list');
    setData(response.data);
}