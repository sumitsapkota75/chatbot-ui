import axios from "axios"

export interface IUser {
    name: string
    email: string
    image: string
}

export interface IMessage{
    text: string
    isUser: boolean
}

export interface IConversation {
    email: string
    messages: IMessage[]
    conversation_id: any
}

export interface IData {
    data: IConversation[]
}

const BASE_URL = "http://localhost:8080"

export const CreateUser = async (userData: IUser)=> {
    const response = await axios.post(`${BASE_URL}/user`, userData)
    return response.data
}

export const SaveConversation = async (convoData: IConversation)=> {
    const response = await axios.post(`${BASE_URL}/save-conversation`, convoData)
    return response.data
}

export const GetConversation = async (email: string)=> {
    const response = await axios.get(`${BASE_URL}/get-conversation?email=${email}`)
    return response.data
}

export const GetConversationByID = async (conversation_id: string)=> {
    const response = await axios.get(`${BASE_URL}/single-chat/${conversation_id}`)
    return response.data
}