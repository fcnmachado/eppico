module.exports = {
  development: {
    username: "root",
    password: null,
    logging: null ,
    database: "eppico_dev",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    logging: null ,
    database: "eppico_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "fcnmachado",
    logging: null,
    password: "studio85",
    database: "eppico_prod",
    host: "eppicodev.cogiuqao2srf.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  }
}