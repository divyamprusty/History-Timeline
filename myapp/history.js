const https = require('https');
function getData() {	
	const date = process.argv[2];
	const month = process.argv[3];
	
	if (!process.argv[2] && !process.argv[3]) {
		console.log('Error => Please provide month and date in arguments');
		process.exit();
	}
	
	if (process.argv[2] < 1 || process.argv[2] > 12) {
		console.log('Error => Month cannot be < 1 or > 12');
		process.exit();
	}
	
	if (process.argv[3] < 1 || process.argv[3] > 31) {
		console.log('Error => Date cannot be < 1 or > 31');
		process.exit();
	}
	
	const options = {
	  hostname: 'history.muffinlabs.com',
	  port: 443,
	  path: '/date/' + date + '/' + month,
	  method: 'GET'
	};

	const req = https.request(options, (res) => {
	  console.log('statusCode:', res.statusCode);
	  console.log('headers:', res.headers);

	  res.on('data', (d) => {
		process.stdout.write(d);
	  });
	});

	req.on('error', (e) => {
	  console.error(e);
	});
	req.end();

}

getData();