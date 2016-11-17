'use strict'

const router = require('express').Router()

// models
const AdminUser = Eppico.mysqldb.AdminUser
//modules
const wrap = require('co-express')
const jwt = require('jsonwebtoken')

//Helpers
const PasswordHelper = require("../helpers/password-helper")


router.post('/', wrap(function *(req, res)  {

  try{

    let user = yield AdminUser.findOne({ email: req.body.email})

    if (user) {
      // check if password matches
      let hash_pass = PasswordHelper.encrypt(req.body.password)

      debugger

      if (user.password === hash_pass) {

        debugger

        var token = jwt.sign(user.toJSON(), Eppico.secret, { expiresIn: 60*60*24 })

        debugger

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        })

      } else {

        res.json({ success: false, message: 'Authentication failed. Wrong password.' })

      }
    } else
       res.json({ success: false, message: 'Authentication failed. AdminUser not found.' })

  }catch(err){
    console.dir(err)
    res.status(500)
    res.send('ERRO')
  }

}))

module.exports = router
