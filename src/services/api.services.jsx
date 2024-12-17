import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

async function submitUrl(url) {
    try {
        const response = await axios.post(`${BASE_URL}/`, null, {
            params: {
                url: url,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting URL: ", error);
        return null;
    }
}

async function getUrl(id) {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting URL: ", error);
        return null;
    }
}

const apiService = {
    submitUrl,
    getUrl,
};

export default apiService;
