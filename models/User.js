"use strict"

	module.exports = function(sequelize, DataTypes) {
		var User = sequelize.define("User", {
			name:   { type: DataTypes.STRING, allowNull: false, notEmpty: true },
			email:   { type: DataTypes.STRING, allowNull: false, notEmpty: true }
		}, 
		{
			timestamps: false
		}
	)

  return User

}