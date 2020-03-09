import "dotenv/config";
import cors from "cors";
import express from "express";

import router from "./routes";
import { getEnv } from "./utils/env";

const app = express();

app.use(cors());
app.use("/", router);

const PORT = getEnv("PORT");
const APP_NAME = getEnv("APP_NAME");

app.listen(PORT, () =>
    console.log(`${APP_NAME} listening on port ${PORT}!`),
);

export default app;
