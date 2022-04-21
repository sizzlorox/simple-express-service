import { Knex, knex } from "knex";
import { Config } from "./Config";

export class Database {
  private static instance: Knex;

  public static InitializeInstance(): Knex {
    const config = Config.getInstance();

    return knex({
      client: "pg",
      connection: {
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT,
        user: config.DATABASE_USER,
        password: config.DATABASE_PWD,
        database: config.DATABASE_DB,
      },
      pool: {
        min: 2,
        max: 10,
      },
      // searchPath: [config.DATABASE_DB, "public"],
    });
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = Database.InitializeInstance();
    }
    return Database.instance;
  }
}