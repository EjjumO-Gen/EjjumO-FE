// comment.js
import { Server } from "./axios.setting";

export const getCommentByPlaylistId = async ({
    playlistId, setData
}) => {
    const response = await Server.get(`comment?playlistId=${playlistId}`);
    setData(response.data);
}