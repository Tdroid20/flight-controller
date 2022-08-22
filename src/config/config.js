const { config } = require('dotenv');
config()
const pg_passwd = process.env.PG_PASSWD;

module.exports = {
  "development": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "localhost",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "localhost",
    "dialect": "postgres",
    "port": 5432
  },
  "production": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "localhost",
    "dialect": "postgres",
    "port": 5432
  }
}