var cm = require('./UserAuthentication');
var fs = require('fs');

var payload = {
				user_name: "chanfool21",
				email: "chan123mishra@gmail.com",
				password: "*********"
			};
hash = cm.GenerateHash(payload);
console.log(hash);
fs.appendFile('HashSaved.txt',payload.user_name +': '+hash);