import axios from 'axios';

axios.interceptors.request.use(config => {

    config.headers = { 'Content-Type': 'application/json' };
    config.baseURL = 'https://backend-facebook-clone.herokuapp.com';

    // แนบ credential (cookie) ไปพร้อมกับ request
    config.withCredentials = true;

    return config;
});

export const useAxios = axios