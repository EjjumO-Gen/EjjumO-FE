// comment.js
import { Server } from "./axios.setting";

export const getCommentByPlaylistId = async ({
    playlistId, setData
}) => {
    const response = await Server.get(`comment?playlistId=${playlistId}`);
    setData(response.data);
};

export const postComment = async (
    commentData
) => {
    console.log('Posting comment with data:', commentData);
    try {
        const response = await Server.post('comment', commentData);
        console.log('Comment posted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to post comment:', error.response ? error.response.data : error);
        throw error;
    }
};