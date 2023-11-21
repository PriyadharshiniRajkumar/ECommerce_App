import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-1a58d/us-central1/api' // the API(clould fucn) URL
});

export default instance;