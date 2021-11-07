import axios from 'axios';
const KEY = process.env.REACT_APP_KEY;


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        // part: "snippet",
        // playlistId: "UUiU0DwnFdPN4hhnq2jKlEyw",
        // key: KEY,
        // maxResults: 9,
        // fields: 'items(snippet/resourceId/videoId,snippet/thumbnails/medium,snippet/title)',
       
    },
    }
)