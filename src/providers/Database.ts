import { Knex, knex } from "knex";

export class Database {
  private static instance: Knex;

  public static InitializeInstance(): Knex {
    return knex({
      client: "pg",
      connection: process.env.PG_CONNECTION_STRING,
      searchPath: ["knex", "public"],
    });
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = Database.InitializeInstance();
    }
    return Database.instance;
  }
}
