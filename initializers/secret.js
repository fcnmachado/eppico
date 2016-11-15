module.exports = () => {
	logger.log('environment loaded: ' + Eppico.env);
	Eppico.secret = require('../config/secret')[Eppico.env];
}