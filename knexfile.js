// Update with your config settings.
require("dotenv").config();

const pg = require("pg");

const { DEV_DATABASE_URL, DEV_DATABASE_TEST_URL } = process.env;

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

const sharedConfig = {
  client: "pg",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: DEV_DATABASE_URL,
  },

  test: {
    ...sharedConfig,
    connection: DEV_DATABASE_TEST_URL,
  },

  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
  },
};
