"use strict"

const loggerMiddleware = require("morgan")
const bodyParserMiddleware = require("body-parser")
const AuthMiddleware = require("../middlewares/authentication")
const authorizeCrossDomainMiddleware = require("../middlewares/authorize-cross-domain")
const bodyLoggerMiddleware = require("../middlewares/body-logger")

module.exports = auth => {
  let middlewareSet = [
    bodyParserMiddleware.json(),
    bodyLoggerMiddleware,
    bodyParserMiddleware.urlencoded({ extended: false }),
    authorizeCrossDomainMiddleware,
    AuthMiddleware(auth)
  ]

  if (Eppico.env !== "test")
    middlewareSet.unshift(loggerMiddleware("dev"))

  return middlewareSet
}
