import { useEffect, useState } from "react";
import axios from "axios";

export const useAccessToken = () => {
  const [token, setToken] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const cleanAccessToken = accessToken
          ? accessToken.replace(/^"|"$/g, "")
          : "";

        setToken(cleanAccessToken);
      } catch (err) {
        setError(err);
      }
    };

    fetchContent();
  }, []);

  return { token, error };
};
