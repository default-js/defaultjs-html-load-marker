const path = require('path');

module.exports = {
	entry: './browser.js',
	resolve: {
		alias: {
			"@src": path.resolve(__dirname + '/src'),
			"@test": path.resolve(__dirname + '/test'),
			"@modules": path.resolve(__dirname + '/node_modules')
		}
	},
	target: "web"
};
