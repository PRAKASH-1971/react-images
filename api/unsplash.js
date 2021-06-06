import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID c5plHUHD1fFPAVXAlGxCQYBZ2bXDI0HJi_M3LMr1zT4'
    }
});