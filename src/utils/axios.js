import axios from 'axios'
// api-key1=AIzaSyBQS3Ly8N9Yo8Ca5aEezmoSRfkf2szKJy8
// api-key2=AIzaSyDmzTPb2SpBSmNFDm_Dd5DuXbljJ2c77Ek
// api-key3=AIzaSyCYjBla1ZAjpSyeLuiAYc7roXxcTUgyQ24
const KEY='AIzaSyCYjBla1ZAjpSyeLuiAYc7roXxcTUgyQ24';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})