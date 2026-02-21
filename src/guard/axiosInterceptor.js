import axios from 'axios';

axios.interceptors.request.use(config => {

    config.headers = { 'Content-Type': 'application/json' };
    config.baseURL = process.env.VUE_APP_API_URL;

    // แนบ credential (cookie) ไปพร้อมกับ request
    config.withCredentials = true;

    return config;
});

export const useAxios = axios
