import express from "express";
import axios from "axios";
import apicache from "apicache";

import { getEnv } from "../../utils/env";
import { getResponseFormat } from "../../utils/format";
import { getPrice, getCurrency } from "../../utils/price";
import { getCategories, getCategory } from "../../utils/categories";
import { getCondition } from "../../utils/condition";

const router = express.Router();
const cacheMiddleware = apicache.middleware;

// router.use(cacheMiddleware(`${getEnv("CACHE_MILISECONDS")} ms`));

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
                id,
                title,
                thumbnail,
                condition,
                category_id,
                sold_quantity,
                currency_id,
                price,
                shipping: { free_shipping },
            } = item;
            const currency = await getCurrency(currency_id);
            const category = await getCategory(category_id);

            const { amount, decimals } = getPrice(
                price,
                currency.decimal_places,
            );

            return {
                id,
                title,
                price: {
                    currency: currency.symbol,
                    amount,
                    decimals,
                },
                picture: thumbnail,
                category,
                condition: getCondition(condition),
                free_shipping,
            };
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
    const {
        id,
        title,
        thumbnail,
        condition,
        sold_quantity,
        currency_id,
        price,
        category_id,
        shipping: { free_shipping },
    } = responseItem.data;
    const currency = await getCurrency(currency_id);
    const category = await getCategory(category_id);

    const { amount, decimals } = getPrice(
        price,
        currency.decimal_places,
    );

    const { plain_text: description } = responseDesciption.data;
    const item = {
        id,
        title,
        price: {
            currency: currency.symbol,
            amount,
            decimals,
        },
        category,
        picture: thumbnail,
        condition: getCondition(condition),
        free_shipping,
        sold_quantity,
        description,
    };
    let response = {
        author,
        item,
    };
    return res.json(response);
});

export default router;
