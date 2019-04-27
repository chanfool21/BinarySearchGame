"use strict"
 var dcode = require('object-hash');
 var log= {
	inputCredentials: function(UserCredentials)
	{
		GenerateHash(UserCredentials);
	}
	,
	GenerateHash: function(UserCredentials)
	{
		return dcode(UserCredentials);
	}
};

module.exports = log;