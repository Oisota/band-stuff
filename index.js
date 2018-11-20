const Metalsmith = require('metalsmith');

Metalsmith(__dirname)
	.source('src')
	.destination('dist')
	.clean(true)
	.build(err => {
		if (err) {
			console.log(err);
		} else {
			console.log('BOOM, it worked');
		}
	});
