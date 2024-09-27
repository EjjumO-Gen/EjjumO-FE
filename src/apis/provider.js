import axios from "axios";

const RapidApiServer = axios.create({
    baseURL: 'https://youtube-music-api3.p.rapidapi.com/',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
    }
})

export const getSearchResult = async ({
    keyword, setData
}) => {
    const response = await RapidApiServer.get('search', {
        params: {
            q: keyword,
            type: 'song'
        }
    })
    console.log(response.data.result)
    setData(response.data.result);
}

export const createYoutubePlaylist = async ({
    googleAccessToken, playlistData
}) => {
    const response = await axios.post('https://www.googleapis.com/youtube/v3/playlists', {
        snippet: {
            title: playlistData.playlistName,
            description: playlistData.description,
            defaultLanguage: 'ko',
        },
        status: {
            privacyStatus: 'private'
        }
    }, {
        params: {
            part: 'snippet,status'
        },
        headers: {
            'Authorization': `Bearer ${googleAccessToken}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data);
    return response.data;
}

export const addSongToPlaylist = async ({
    googleAccessToken, youtubePlaylistId, videoId
}) => {
    const response = await axios.post('https://www.googleapis.com/youtube/v3/playlistItems', {
        snippet: {
            playlistId: youtubePlaylistId,
            resourceId: {
                kind: 'youtube#video',
                videoId: videoId
            }
        }
    }, {
        params: {
            part: 'snippet'
        },
        headers: {
            'Authorization': `Bearer ${googleAccessToken}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data);
    return response.data;
}