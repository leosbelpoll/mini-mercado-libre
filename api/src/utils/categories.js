import axios from "axios";

import { getEnv } from "./env";

const api = getEnv("API_URL");

export const getCategories = filters => {
    const categoryFilters = filters.find(
        filter => filter.id === "category",
    );
    if (categoryFilters) {
        if (categoryFilters.values.length > 0)
            return categoryFilters.values[0].path_from_root.map(
                item => item.name,
            );
    }
    return [];
};

export const getCategory = category => {
    return axios
        .get(`${api}/categories/${category}`)
        .then(res => res.data.name);
};
