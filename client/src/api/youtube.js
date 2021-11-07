import axios from 'axios';



export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: "snippet",
        playlistId: "UUiU0DwnFdPN4hhnq2jKlEyw",
        key: process.env.REACT_APP_KEY,
        maxResults: 9,
        // fields: 'items(snippet/resourceId/videoId,snippet/thumbnails/medium,snippet/title)',
       
    },
    }
)