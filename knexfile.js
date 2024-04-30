const path = require('path');

module.exports = {
  development: {
    client: 'pg', // Mudança para o cliente pg (PostgreSQL)
    connection: process.env.PG_URL,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
