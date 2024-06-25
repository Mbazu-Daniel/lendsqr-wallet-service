require("ts-node/register");
import { DATABASE_URL } from "./src/utils/envConfig";
import { Knex } from "knex";

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations",
    },
  },
};

export default knexConfig;
