//axios.js
import { baseUrl } from "./env";
import axios from "axios";

const service = axios.create({
    baseURL:baseUrl,
    timeout:5000
})

export default service;