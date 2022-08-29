const { config } = require('dotenv');
config()
const pg_passwd = process.env.PG_PASSWD;

console.log(pg_passwd)
module.exports = {
  "development": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "db",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "db",
    "dialect": "postgres",
    "port": 5432
  },
  "production": {
    "username": "postgres",
    "password": '2682',
    "database": "flight-controller",
    "host": "db",
    "dialect": "postgres",
    "port": 5432
  }
}