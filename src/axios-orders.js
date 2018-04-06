import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c4a4a.firebaseio.com/'
});

export default instance;