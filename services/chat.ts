import axios from "axios"

const BASE_URL = "http://localhost:8080"

export const chat = async (data: any)=> {
    const response = await axios.post(`${BASE_URL}/chat`,data)
    return response.data
}