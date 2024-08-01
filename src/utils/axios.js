import axios from "axios";

const customFetch = axios.create({
    baseURL : "https://wheels-server.zeabur.app/api/v1"
})


export default customFetch;