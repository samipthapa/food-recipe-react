import axios from 'axios';
import { getLocalStorage } from './storageUtils';

const token = getLocalStorage("user").token;

const api = axios.create({});

api.interceptors.request.use(
    config => {
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

export default api;

