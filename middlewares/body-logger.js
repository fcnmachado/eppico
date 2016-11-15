colors = require('colors')

module.exports = (req, res, next) => {
  logger.log("body: " +  colors.green( JSON.stringify( req.body ) ))
  next()
}