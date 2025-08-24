import axios from  "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/ap1",
    withCredentials: true,
})