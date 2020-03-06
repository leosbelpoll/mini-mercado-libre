import express from "express";
import apicache from "apicache";

import product from "../../src/mocks/product";
import products from "../../src/mocks/products";

const router = express.Router();
const cacheMiddleware = apicache.middleware;

router.use(cacheMiddleware(`${process.env.CACHE_MILISECONDS || 60000} ms`));

router.get("/", (req, res) => {
    const { q } = req.query;

    res.json(products);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.json(product);
});

export default router;
