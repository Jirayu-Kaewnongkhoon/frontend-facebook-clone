import axios from 'axios';

axios.interceptors.request.use(config => {

    config.headers = { 'Content-Type': 'application/json' };
    config.baseURL = 'https://backend-production-94de.up.railway.app';

    // แนบ credential (cookie) ไปพร้อมกับ request
    config.withCredentials = true;

    return config;
});

export const useAxios = axios
