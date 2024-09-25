import axios from 'axios';

export const Server = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
})