import axios from 'axios'
import {apikey} from './key'
const KEY=apikey;
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})