import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-hair-styles.herokuapp.com/'
});

export default api;