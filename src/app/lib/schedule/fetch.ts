"use client";
import axios from "axios";



export const getScheduledContent = async (token) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}`,
        {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;

    }
}

export const getScheduleById = async (token, id: string) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const postScheduled = async (token,content: any) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}`,
            content,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteSchedule = async (token, id: string) => {
    try {
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updateSchedule = async (token,id , scheduledTime) => {
    try {
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}/${id}`,
            scheduledTime,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}