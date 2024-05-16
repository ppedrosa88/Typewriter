"use client";
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

export const getScheduledContent = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}`,
        {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cleanAccessToken}`,
            },
          }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;

    }
}

export const getScheduleById = async (token = cleanAccessToken, id: string) => {
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

export const postScheduled = async (content: any) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}`,
            content,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
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

export const updateSchedule = async (id , scheduledTime) => {
    try {
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_SCHEDULE}/${id}`,
            scheduledTime,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
                },
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}