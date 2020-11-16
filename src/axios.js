import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecommerce-e6c15/us-central1/api'
});

export default instance;