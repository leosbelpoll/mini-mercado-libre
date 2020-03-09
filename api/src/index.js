import "dotenv/config";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import router from "./routes";
import { getEnv } from "./utils/env";

const app = express();

app.use(cors());
app.use("/", router);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = getEnv("PORT");
const APP_NAME = getEnv("APP_NAME");

if (getEnv("NODE_ENV") !== "test") {
    app.listen(PORT, () =>
        console.log(`${APP_NAME} listening on port ${PORT}!`),
    );
}
export default app;
