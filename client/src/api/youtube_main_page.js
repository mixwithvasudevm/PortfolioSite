import axios from 'axios';
const KEY = 'AIzaSyASk-OtQKcCa_0qWttUn-YB5WzFReT3ThM';


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: "snippet",
        playlistId: "UUiU0DwnFdPN4hhnq2jKlEyw",
        key: KEY,
        maxResults: 8,
        fields: 'items(snippet/resourceId/videoId,snippet/thumbnails/medium,snippet/title)',
    },
    }
)
//snippet.Object.title