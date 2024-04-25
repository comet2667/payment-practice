import axios from "axios"

const API = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true,
})

export const payReserve = async(param) => {
    try {
        const { data } = await API.post("/reserve", param);
        return data;
    } catch (e){
        console.log(e);
    }
}