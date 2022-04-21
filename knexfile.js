require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: "./seeds",
    },
    migrations: {
      tableName: "migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: "./seeds",
    },
    migrations: {
      tableName: "migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: "./seeds",
    },
    migrations: {
      tableName: "migrations",
    },
  },
};