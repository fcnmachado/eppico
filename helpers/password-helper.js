"use strict";

const crypto = require('crypto')

var PasswordHelper = {

	encrypt : (password) => {

		logger.log('[PASSWORD-HELPER] Encrypting password')

		return (crypto.createHash('md5').update(password + Eppico.secret ).digest('hex'));

	} 

}

module.exports = PasswordHelper