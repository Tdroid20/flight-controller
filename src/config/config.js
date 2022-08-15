const pg_passwd = process.env.PG_PASSWD;

module.exports = {
  "development": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": pg_passwd,
    "database": "flight-controller",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}