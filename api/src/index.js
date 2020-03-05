import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;
const APP_NAME = process.env.APP_NAME || "Mini Mercado Libre";

app.listen(PORT, () => console.log(`${APP_NAME} listening on port ${PORT}!`));

export default app;
