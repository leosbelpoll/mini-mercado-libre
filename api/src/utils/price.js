import axios from "axios";

import { getEnv } from "./env";

const API_URL = getEnv("API_URL");

export const getPrice = (price, decimals_place) => {
    if (isNaN(price)) {
        throw new Error("Invalid number");
    }
    const splitedPrice = price.toString().split(".");
    const decimals = splitedPrice.length == 2 ? splitedPrice[1] : "0";
    return {
        amount: splitedPrice[0],
        decimals: decimals.padEnd(decimals_place, "0"),
    };
};

export const getCurrency = symbol => {
    return axios
        .get(`${API_URL}/currencies/${symbol}`)
        .then(res => res.data);
};
