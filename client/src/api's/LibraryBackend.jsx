import axios from 'axios';
import {getUserToken} from '../utils/LoginUtils';

const LibraryBackend = axios.create({
  baseURL: `https://library-manageent-system-using-mern.onrender.com/`, 
});

LibraryBackend.interceptors.request.use(
    (config) => {
        const token = getUserToken();
        if (token) {
            config.headers = {Authorization:  `Bearer ${token}`};
            console.log("Inside interceptor");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default LibraryBackend;