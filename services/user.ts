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
    conversationId: any
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
    const response = await axios.post(`${BASE_URL}/conversation?email=${email}`)
    console.log({response})
    return response
}