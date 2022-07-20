import axios from "axios";
export const API = axios.create({baseUrl:'http://localhost:3001/api', timeout:2500})


