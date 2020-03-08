import express from "express";

import productsRouter from "./products";

const apiRouter = express.Router();

apiRouter.use("/items", productsRouter);

export default apiRouter;
