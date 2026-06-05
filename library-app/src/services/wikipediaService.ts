import axios from "axios";

export const getWikipediaSummary = async (
    title: string
) => {
    const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            title
        )}`
    );

    return response.data;
};