const knex = require("knex")({
  client: "pg", // this is the postgres client
  connection: {
    host: "127.0.0.1", // this is localhost
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  },
});

module.exports = knex;
