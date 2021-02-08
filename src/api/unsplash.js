import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 54f0Wm2Uh-ff2MsLw1nFJTja7qqI1YmPs7vgjdN6Zeo'
    }
})