import axios from "axios"


export const getApiKeys = async (token) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    } catch (error) {
        console.log(error.response) 
    }
}

export const createApiKey = async (token, name) => {
    console.log(name)
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_API_KEY}`, name,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response)
    }
}

export const deleteApiKey = async (token, id) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_API_KEY}/${id}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        console.log(error.response)
    }
}

