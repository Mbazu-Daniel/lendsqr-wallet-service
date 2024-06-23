require("ts-node/register");
import { DATABASE_URL } from "./src/utils/envConfig";

module.exports = {
  development: {
    client: "mysql",
    connection: DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations",
    },
  },
};
