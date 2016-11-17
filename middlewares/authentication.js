'use strict'

const jwt = require('jsonwebtoken')

module.exports = (whitelist) =>{
  
  const AUTH_WHITELIST = whitelist

  var middleware = (req, res, next) => {

    function authSuccess(decoded,req,next) {
      req.decoded = decoded    
      next()
    }

    if (req.method === 'OPTIONS') {
      next()
      return
    }

    if (AUTH_WHITELIST.indexOf(req.method + ':' + req.originalUrl.replace(/\/$/,"")) > -1) {
      next()
      return
    }

    let token = req.body.token || req.query.token || req.headers['x-access-token']

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1]
    }

    if (token) {

      jwt.verify(token, Eppico.secret , (err, decoded) => {      

        if (err) {

          return res.json({ success: false, message: 'Failed to authenticate token.' })   

        } else {

          authSuccess(decoded,req,next)
   
        }
      })

    } else {

      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      })
    }
  }

  return middleware
}
