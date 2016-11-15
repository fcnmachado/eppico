Eppico = {}
Eppico.env = process.env.NODE_ENV || "development"
global.logger = require("./logger")()