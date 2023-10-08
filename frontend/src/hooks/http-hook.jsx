import { useState } from "react";
import axios from "axios";

export function useHttpClient() {
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async (path, body) => {
        setIsLoading(true);

        const request = axios.create({
            baseURL: "http://localhost:8000/api/v1/users/",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const response = await request.post(path, body);

        setIsLoading(false);
        return response.data;
    };

    return {
        isLoading,
        sendRequest,
    };
}