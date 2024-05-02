import axios from "axios"
import { User } from "../models/User"

export const createUser = async (userData: User) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTH}`, userData)
        return response.data
    } catch (error) {
        return error.response;
    }
}

export const loginUser = async (userData: User) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTH}/login`, userData)
        return response.data
    } catch (error) {
        console.log('Error logging in user:', error.response)
        return error.response
    }   
}