import express from "express";
import axios from "axios";
import apicache from "apicache";

import { getEnv } from "../../utils/env";
import { getResponseFormat } from "../../utils/format";
import { getCategories } from "../../utils/categories";
import { getCondition } from "../../utils/condition";
import { getProduct } from "../../utils/product";

const router = express.Router();
const cacheMiddleware = apicache.middleware;

router.use(cacheMiddleware(`${getEnv("CACHE_MILISECONDS")} ms`));

const API_URL = getEnv("API_URL");
const author = {
    name: getEnv("AUTHOR_NAME"),
    lastname: getEnv("AUTHOR_LASTNAME"),
};

router.get("/", async (req, res) => {
    const { q } = req.query;
    let products;

    try {
        products = await axios.get(`${API_URL}/sites/MLA/search`, {
            params: {
                q,
                limit: getEnv("ITEMS_LIMIT"),
            },
        });
    } catch (error) {
        return res
            .status(500)
            .json(
                getResponseFormat(
                    "Api Mercado Libre not available",
                    "api_not_available",
                    500,
                ),
            );
    }

    const items = await Promise.all(
        products.data.results.map(async item => {
            const {
                shipping: { free_shipping },
                address: { city_name },
                condition
            } = item;
            const product = await getProduct(item);
            product.free_shipping = free_shipping;
            product.city_name = city_name;
            product.condition = getCondition(condition);
            return product;
        }),
    );
    let response = {
        author,
        categories: getCategories(products.data.filters),
        items,
    };
    res.json(response);
});

router.get("/:id", async (req, res) => {
    const idItem = req.params.id;
    let responseItem, responseDesciption;
    try {
        responseItem = await axios.get(`${API_URL}/items/${idItem}`);
        responseDesciption = await axios.get(
            `${API_URL}/items/${idItem}/description`,
        );
    } catch (error) {
        if (error.code === "ENOTFOUND") {
            return res
                .status(500)
                .json(
                    getResponseFormat(
                        "Api Mercado Libre not available",
                        "api_not_available",
                        500,
                    ),
                );
        }
        const responseE = error.response.data;
        if (responseE.status === 404) {
            responseE.message = `Product with id ${idItem} not found`;
            return res.status(responseE.status).json(responseE);
        }
    }
    const item = await getProduct(responseItem.data);
    item.description = responseDesciption.data.plain_text;
    item.sold_quantity = responseItem.data.sold_quantity;
    item.condition = getCondition(responseItem.data.condition);
    let response = {
        author,
        item,
    };
    return res.json(response);
});

export default router;
