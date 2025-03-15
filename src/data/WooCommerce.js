import axios from "axios";
const API_URL = "http://localhost/fashion/wp-json/wc/v3";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    }

    catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    }

    catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}