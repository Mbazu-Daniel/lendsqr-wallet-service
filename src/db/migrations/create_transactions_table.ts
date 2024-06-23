import { Knex } from "knex";

exports.up = async function (knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable("transactions");
  if (!exists) {
    return knex.schema.createTable("transactions", function (table) {
      table.increments("id").primary();
      table.enum("type", ["fund", "transfer", "withdraw"]);
      table.decimal("amount", 14, 2).notNullable();
      table
        .integer("from_user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("to_user_id")
        .unsigned()
        .nullable()
        .references("id")
        .inTable("users");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
  }
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTableIfExists("transactions");
};
