import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const chat = async (data: any)=> {
    const response = await axios.post(`${BASE_URL}/chat`,data)
    return response.data
}