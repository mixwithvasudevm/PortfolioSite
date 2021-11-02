import axios from 'axios';
const KEY = 'AIzaSyASk-OtQKcCa_0qWttUn-YB5WzFReT3ThM';


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: "snippet",
        playlistId: "UUiU0DwnFdPN4hhnq2jKlEyw",
        key: KEY,
        maxResults: 5,
    },
    }
)