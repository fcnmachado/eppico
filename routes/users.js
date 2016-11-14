"use strict"

const express = require('express')
const router = express.Router()
const User = Eppico.mysqldb.User

const wrap = require("co-express")

/* GET users listing. */
router.get('/',  wrap(function*(req, res) {
	yield User.findAll().then(function(users) {
  		res.send(users)
	})
}))

module.exports = router
