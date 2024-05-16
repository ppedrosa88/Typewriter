import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

export const getAllAutomations = async () => {
    try {
        const {data} = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}`, 
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
                },
            }
        )
        return data;
    } catch (error) {
        
    }
}

export const getAutomationById = async (id: string) => {
    try {
        const {data} = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const postAutomation = async (automation: any) => {
    try {
        const {data} = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}`, 
            automation,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
    
}

export const updateAutomation = async (id: string, automation: any) => {
    console.log(automation)
    const {data} = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
        automation,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cleanAccessToken}`,
            },
        }
    )
    console.log(data)
    return data;
}

export const deleteAutomation = async (id: string) => {
    try {
        const {data} = await axios.delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_AUTOMATION}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cleanAccessToken}`,
                },
            }
        )
        return data;
    } catch (error) {
        console.log(error)
    }
}