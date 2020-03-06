import "dotenv/config";
import cors from "cors";
import express from "express";

import router from "../routes";

const app = express();

app.use(cors());
app.use("/", router);

const PORT = process.env.PORT || 3001;
const APP_NAME = process.env.APP_NAME || "Mini Mercado Libre";

app.listen(PORT, () =>
    console.log(`${APP_NAME} listening on port ${PORT}!`),
);

export default app;
