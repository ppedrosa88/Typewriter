import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const cleanAccessToken = accessToken.replace(/^"|"$/g, "");

export const getAllContent = async (token = cleanAccessToken) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getContentById = async (token = cleanAccessToken, id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postContent = async (content: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}`,
      content,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanAccessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
};

export const updateContentById = async (id: string, content: any) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}/${id}`,
      content,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanAccessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContentById = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanAccessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {}
};

export const postByAi = async (content: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_BASE_CONTENT}/ia`,
      content,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanAccessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
