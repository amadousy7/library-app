import axios from "axios";

const BASE_URL = "https://openlibrary.org";

export const searchBooks = async (query: string) => {
    const response = await axios.get(
        `${BASE_URL}/search.json?q=${query}`
    );

    return response.data.docs;
};

export const getRecentChanges = async () => {
    const response = await axios.get(
        `${BASE_URL}/recentchanges.json?limit=10`
    );

    return response.data;
};

export const getBookDetails = async (id: string) => {
    const response = await axios.get(
        `${BASE_URL}/works/${id}.json`
    );

    return response.data;
};
export const advancedSearch = async (
    title: string,
    author: string,
    year: string,
    subject: string
) => {
    let url =
        "https://openlibrary.org/search.json?";

    if (title) {
        url += `title=${encodeURIComponent(title)}&`;
    }

    if (author) {
        url += `author=${encodeURIComponent(author)}&`;
    }

    if (year) {
        url += `first_publish_year=${encodeURIComponent(
            year
        )}&`;
    }

    if (subject) {
        url += `subject=${encodeURIComponent(
            subject
        )}&`;
    }

    const response = await axios.get(url);

    return response.data.docs;
};