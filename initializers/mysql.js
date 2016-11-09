"use strict"

const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")


module.exports = () => {
  Eppico.mysqlconfig = require("../config/mysql")[Eppico.env]
  let mysqldb = {}
  let sequelize = new Sequelize(
    Eppico.mysqlconfig.database,
    Eppico.mysqlconfig.username,
    Eppico.mysqlconfig.password,
    Eppico.mysqlconfig
  )
  let dir_models = "../models/"
  console.dir(Eppico.mysqlconfig)

  fs
  .readdirSync(path.join(__dirname, dir_models))
  .forEach(filename => {
    if (filename.endsWith(".js")) {
      let model = sequelize.import(dir_models + filename)
      mysqldb[model.name] = model

      if (model.associate)
        model.associate(mysqldb)
    }
  })

  sequelize.authenticate().then(function(err) {
    	console.log('Connection with MYSQL has been established successfully.')
  	}).catch(function (err) {
    	console.log('Unable to connect to MYSQL database:', err)
  	})

  mysqldb.sequelize = sequelize
  sequelize
  .sync()
  .then(() => {
    // associations
    console.log("building associations")
    /*mysqldb.Address.belongsTo(mysqldb.BillingInformation)
    mysqldb.BillingInformation.hasOne(mysqldb.Address)*/
  })
  .catch(err => {
    console.error(err)
  })

  Eppico.mysqldb = mysqldb
}
