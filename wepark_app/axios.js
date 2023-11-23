import axios from "axios";
import config from "./server.config";

export const makeRequest = axios.create({
    baseURL: config.SERVER_URL + "/api",
    withCredentials: true,
})