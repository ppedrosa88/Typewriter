"use client";
import axios from "axios";

export const getAllAutomations = async (token) => {
    try {
        const {data} = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}`, 
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return data;
    } catch (error) {
        
    }
}

export const getAutomationById = async (token,id: string) => {
    try {
        const {data} = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const postAutomation = async (token,automation: any) => {
    try {
        const {data} = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}`, 
            automation,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
    
}

export const updateAutomation = async (token,id: string, automation: any) => {
    console.log(automation)
    const {data} = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
        automation,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    )
    console.log(data)
    return data;
}

export const deleteAutomation = async (token,id: string) => {
    try {
        const {data} = await axios.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
}