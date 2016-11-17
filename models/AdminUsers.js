"use strict"

//Helpers
const PasswordHelper = require("../helpers/password-helper")

	module.exports = function(sequelize, DataTypes) {
		var AdminUser = sequelize.define("AdminUser", {
			name:   { type: DataTypes.STRING, allowNull: false, notEmpty: true },
			email:   { type: DataTypes.STRING, allowNull: false, notEmpty: true },
			password: { type: DataTypes.STRING, allowNull: false, notEmpty: true}
		}, 
		{
			timestamps: false
		}
	)

	AdminUser.beforeCreate(function(user, options) {
		user.password = PasswordHelper.encrypt(user.password)
	})

  return AdminUser
}