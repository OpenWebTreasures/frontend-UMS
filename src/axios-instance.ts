import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BASEURL } from './routes';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BASEURL,
    timeout: 30000,
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
