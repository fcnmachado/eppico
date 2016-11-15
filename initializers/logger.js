"use strict"

const fs = require("fs")

module.exports = () => {
  let logger

  if (Eppico.env === "test") {
    const devnull = fs.createWriteStream("/dev/null")
    logger = new console.Console(devnull, console._stderr)

  } else
    logger = console

  return logger
}
