
module.exports = {

    development: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./models/piktorlog.db3"
      },
      migrations: {
        directory: "./models/migrations"
      },
      seeds: {
        directory: "./models/seeds"
      },
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
        },
      }
    },

    review: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./models/migrations"
      },
      seeds: {
        directory: "./models/seeds"
      },
    },

    staging: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./models/migrations"
      },
      seeds: {
        directory: "./models/seeds"
      },
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./models/migrations"
      },
      seeds: {
        directory: "./models/seeds"
      },
    },
  }
    