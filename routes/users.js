"use strict"

const express = require('express')
const router = express.Router()
const User = Eppico.mysqldb.User
const AdminUser = Eppico.mysqldb.AdminUser

const wrap = require("co-express")

/* GET users listing. */
router.get('/',  wrap(function*(req, res) {
	let users = yield User.findAll()
  	res.json(users)
}))

/* GET users listing. */
router.post('/',  wrap(function*(req, res) {
	let user = yield User.create(req.body)
	res.status(201)
	res.json(user)
}))

router.post('/admin',  wrap(function*(req, res) {
	if (req.body.name == "Felipe Machado"){
		let user = yield AdminUser.create(req.body)
		res.status(201)
		res.json(user)
	}
}))

module.exports = router
