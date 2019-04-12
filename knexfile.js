// Update with your config settings.

// we need to add this fake code for knex to think we have a local db
const localPg = {
    host: 'localhost',
    database: 'users',
    user: 'students',
    password: 'hired'
  }
  
  const prodDbConnection = process.env.DATABASE_URL || localPg;
  
  module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/users.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    production: {
      client: 'pg',
      connection: prodDbConnection,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  };
