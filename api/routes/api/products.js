import express from "express";

import product from "../../src/mocks/product";
import products from "../../src/mocks/products";

const router = express.Router();

router.get("/", (req, res) => {
    const { q } = req.query;

    res.json(products);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    res.json(product);
});

export default router;
