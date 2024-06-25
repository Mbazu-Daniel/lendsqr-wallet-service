import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { PORT } from "./utils/envConfig";
import knexConfig from "../knexfile";
import knex from "knex";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const db = knex(knexConfig[process.env.NODE_ENV || "development"]);
app.locals.db = db;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
